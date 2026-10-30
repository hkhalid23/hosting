// Renders index.html frame-by-frame and pipes PNGs into ffmpeg.
// Usage:
//   node render.js stills 3,8,14,20,27,35   -> stills/*.png for quick review
//   node render.js video out.mp4 [audio.wav] [s1,s3,s4,s5]
//   node render.js duration x - s1,s3,s5          -> prints the video length
const { chromium } = require('/opt/node-tools/node_modules/playwright');
const { spawn } = require('child_process');
const path = require('path');
const fs = require('fs');

const FPS = 30;
const [mode = 'video', arg = 'invitation.mp4', audioArg, scenes] = process.argv.slice(2);
const audio = audioArg && audioArg !== '-' ? audioArg : null;

(async () => {
  const browser = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium', args: ['--allow-file-access-from-files'] });
  const page = await browser.newPage({ viewport: { width: 1080, height: 1920 }, deviceScaleFactor: 1 });
  await page.goto('file://' + path.join(__dirname, 'index.html') + '?render' + (scenes ? '&scenes=' + scenes : ''));
  await page.evaluate(() => window.ready);
  const duration = await page.evaluate(() => window.DURATION);
  const stage = await page.$('#stage');

  if (mode === 'duration') {
    console.log(duration);
  } else if (mode === 'stills') {
    fs.mkdirSync(path.join(__dirname, 'stills'), { recursive: true });
    for (const t of arg.split(',').map(Number)) {
      await page.evaluate(t => window.render(t), t);
      await stage.screenshot({ path: path.join(__dirname, 'stills', `t${String(t).padStart(4, '0')}.png`) });
    }
  } else {
    const ffArgs = ['-y', '-v', 'error', '-f', 'image2pipe', '-framerate', String(FPS), '-i', '-'];
    if (audio) ffArgs.push('-i', audio);
    ffArgs.push('-c:v', 'libx264', '-preset', 'slow', '-crf', '19', '-maxrate', '3500k', '-bufsize', '7000k',
      '-profile:v', 'high', '-level', '4.1', '-pix_fmt', 'yuv420p', '-r', String(FPS));
    if (audio) ffArgs.push('-c:a', 'aac', '-b:a', '160k', '-shortest');
    ffArgs.push('-movflags', '+faststart', arg);
    const ff = spawn('ffmpeg', ffArgs, { stdio: ['pipe', 'inherit', 'inherit'] });
    const frames = Math.round(duration * FPS);
    for (let i = 0; i < frames; i++) {
      await page.evaluate(t => window.render(t), i / FPS);
      const buf = await stage.screenshot({ type: 'png' });
      if (!ff.stdin.write(buf)) await new Promise(r => ff.stdin.once('drain', r));
      if (i % 60 === 0) process.stderr.write(`frame ${i}/${frames}\n`);
    }
    ff.stdin.end();
    await new Promise(r => ff.on('close', r));
  }
  await browser.close();
})();
