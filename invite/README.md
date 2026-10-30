# Animated Wedding Invitation (Mehndi, Barat & Walima)

Vertical 1080×1920 animated invitation, rendered to an MP4 for sharing on WhatsApp.

- `index.html` – the invitation. Open it in a browser for a live preview.
- `music.py` – generates the soft background tune (`python3 music.py music.wav 36`).
- `render.js` – renders the page frame-by-frame into a video with Playwright and ffmpeg:
  `node render.js video invitation.mp4 music.wav`
- `Mehtab-Hamza-Wedding-Invitation.mp4` – the final video.

Event details are plain text in `index.html` (scenes `s1`–`s5`; couple illustration in `couple.js`); edit them there and re-render.

## Variants

`render.js video <out.mp4> <music.wav> <scenes> <couple|wreath>` picks the slides
(`s1` intro, `s2` Mehndi, `s3` Barat, `s4` Walima, `s5` ending) and the intro decoration.
Generate matching music first with `python3 music.py music.wav $(node render.js duration x - <scenes> <deco>)`.

- `Mehtab-Hamza-Wedding-Invitation.mp4` – all slides, couple (`s1,s2,s3,s4,s5 couple`)
- `Invitation-Barat-Walima.mp4` – `s1,s3,s4,s5 wreath`
- `Invitation-Barat.mp4` – `s1,s3,s5 wreath`
- `Invitation-Walima.mp4` – `s1,s4,s5 wreath`
