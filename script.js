const divVerde = document.getElementById('div_verde');

window.addEventListener('scroll', () => {
  const scrollPercentage = window.scrollY / (document.body.scrollHeight - window.innerHeight);
  const verdeClaro = [144, 238, 144];
  const verdeEscuro = [0, 100, 0];
  const corAtual = verdeClaro.map((valor, index) => {
    return Math.round(valor + (verdeEscuro[index] - valor) * scrollPercentage);
  });
  divVerde.style.backgroundColor = `rgb(${corAtual.join(',')})`;
});

/* butao */
const botao = document.getElementById('botao');
const accordion = document.getElementById('accordion');
botao.addEventListener('click', () => {
  accordion.classList.toggle('ativo');
});