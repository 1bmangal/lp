const accordion = document.querySelector('.accordion');
const speech_bubble = document.querySelector('.speech_bubble');
accordion.addEventListener('click', () => {
  if (speech_bubble.style.display === 'none' || speech_bubble.style.display === '') {
    speech_bubble.style.display = 'block';
  } else {
    speech_bubble.style.display = 'none';
  }
});