
const cards = document.querySelectorAll('.card');
const audio = document.getElementById('audio');
const audioSource = document.getElementById('audio-source');


cards.forEach(card => {
  card.addEventListener('click', () => {
    const songSrc = card.getAttribute('data-src');
    audioSource.src = songSrc;
    audio.load();
    audio.play();
    audio.volume = 0.2;
  });
});