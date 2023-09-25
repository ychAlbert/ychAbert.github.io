let typed = new Typed('#typed-text', {
    strings: ['这是一个网站'],
    typeSpeed: 100,
    backSpeed: 50,
    loop: true,
    showCursor: true,
    cursorChar: '|',
    smartBackspace: true,
    backDelay: 1000,
    startDelay: 1000
  });
  const audio = document.getElementById('audio');
const playButton = document.querySelector('.play-button');

function toggleAudio() {
  if (audio.paused) {
    audio.play();
    playButton.classList.add('audio-playing');
  } else {
    audio.pause();
    playButton.classList.remove('audio-playing');
  }
}
