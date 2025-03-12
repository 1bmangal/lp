const botaoCarta = document.getElementById('botao_carta');
const accordionCarta = document.getElementById('accordion_carta');

botaoCarta.addEventListener('click', () => {
  accordionCarta.classList.toggle('ativo');
});