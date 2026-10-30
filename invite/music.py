# Synthesises a soft music-box + pad background track (royalty-free, generated here).
# Usage: python3 music.py out.wav [seconds]
import sys, wave
import numpy as np

SR = 44100
DUR = float(sys.argv[2]) if len(sys.argv) > 2 else 36.0
BPM = 72
BEAT = 60 / BPM
BAR = BEAT * 4
rng = np.random.default_rng(3)

def hz(n): return 440 * 2 ** ((n - 69) / 12)

def bell(freq, dur, vel):
    t = np.arange(int(SR * dur)) / SR
    env = np.exp(-t * 3.2) * (1 - np.exp(-t * 400))
    s = (np.sin(2 * np.pi * freq * t) + .35 * np.sin(2 * np.pi * freq * 2.01 * t) * np.exp(-t * 4)
         + .12 * np.sin(2 * np.pi * freq * 3.98 * t) * np.exp(-t * 7))
    return s * env * vel

def pluck(freq, dur, vel):  # soft piano-ish
    t = np.arange(int(SR * dur)) / SR
    env = np.exp(-t * 1.6) * (1 - np.exp(-t * 200))
    s = sum(np.sin(2 * np.pi * freq * k * t) / k ** 1.6 * np.exp(-t * k * .8) for k in range(1, 6))
    return s * env * vel

def pad(freqs, dur, vel):
    t = np.arange(int(SR * dur)) / SR
    env = np.minimum(1, t / 1.2) * np.minimum(1, (dur - t) / 1.2).clip(0)
    s = sum(np.sin(2 * np.pi * f * t + i) + .3 * np.sin(2 * np.pi * f * 1.003 * t) for i, f in enumerate(freqs))
    return s * env * vel / len(freqs)

out = np.zeros(int(SR * (DUR + 4)))
def add(sig, at):
    i = int(at * SR); out[i:i + len(sig)] += sig[:len(out) - i]

# chords (MIDI roots in D major): D, Bm, G, A
CH = {'D': [50, 54, 57], 'Bm': [47, 50, 54], 'G': [43, 47, 50], 'A': [45, 49, 52]}
n_bars = int(np.ceil((DUR - 0.4) / BAR))
prog = (['D', 'Bm', 'G', 'A'] * 8)[:n_bars - 1] + ['D']
# melody per bar: (beat offset, midi)
MEL = [
    [(0, 78), (1, 76), (2, 74), (3, 76)],
    [(0, 78), (1.5, 81), (3, 78)],
    [(0, 79), (1, 78), (2, 76), (3, 74)],
    [(0, 76), (2, 73)],
    [(0, 74), (1, 76), (2, 78), (3, 81)],
    [(0, 83), (1.5, 81), (3, 78)],
    [(0, 79), (1, 81), (2, 79), (3, 76)],
    [(0, 78), (2, 76)],
]
MEL = [MEL[b % 8] for b in range(n_bars - 1)] + [[(0, 74)]]
for b, name in enumerate(prog):
    t0 = 0.4 + b * BAR
    if t0 > DUR: break
    ch = CH[name]
    add(pad([hz(n + 12) for n in ch], BAR + 1.2, .05), t0)
    add(pluck(hz(ch[0] - 12), 3.0, .16), t0)
    arp = [ch[0], ch[1], ch[2], ch[1] + 12, ch[2], ch[1], ch[0] + 12, ch[2]]
    for i, n in enumerate(arp):
        if b == len(prog) - 1 and i > 0: break
        add(pluck(hz(n + 12), 2.0, .07 * (1.0 if i % 2 == 0 else .75)), t0 + i * BEAT / 2)
    if b >= 1:  # let the intro breathe for one bar
        for off, n in MEL[b]:
            add(bell(hz(n), 2.5, .11 + rng.random() * .02), t0 + off * BEAT)

# simple reverb: convolve with decaying noise
ir_len = int(SR * 2.2)
ir = rng.standard_normal(ir_len) * np.exp(-np.arange(ir_len) / SR * 3.0)
ir /= np.abs(ir).sum() / 6
wet = np.convolve(out, ir)[:len(out)]
mix = out * .8 + wet * .35
mix = mix[:int(SR * DUR)]
t = np.arange(len(mix)) / SR
mix *= np.minimum(1, t / 1.0) * np.clip((DUR - t) / 3.0, 0, 1)
mix = mix / np.abs(mix).max() * .7
st = np.stack([mix, np.roll(mix, int(SR * .012)) * .97], 1)  # slight stereo width
with wave.open(sys.argv[1], 'wb') as w:
    w.setnchannels(2); w.setsampwidth(2); w.setframerate(SR)
    w.writeframes((st * 32767).astype('<i2').tobytes())
