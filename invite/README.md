# Animated Wedding Invitation (Mehndi, Barat & Walima)

Vertical 1080×1920 animated invitation, rendered to an MP4 for sharing on WhatsApp.

- `index.html` – the invitation. Open it in a browser for a live preview.
- `music.py` – generates the soft background tune (`python3 music.py music.wav 36`).
- `render.js` – renders the page frame-by-frame into a video with Playwright and ffmpeg:
  `node render.js video invitation.mp4 music.wav`
- `Mehtab-Hamza-Wedding-Invitation.mp4` – the final video.

Event details are plain text in `index.html` (scenes `s1`–`s5`; couple illustration in `couple.js`); edit them there and re-render.
