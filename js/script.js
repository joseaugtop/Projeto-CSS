let path = './img/matricula-';
let imagens = ['ingles', 'italiano'];

function imgAtual(index) {
    carrossel = document.getElementById('carrossel');
    ponto = document.getElementsByClassName('selecao-matricula');

    for (i = 0; i < ponto.length; i++) {
        ponto[i].className = ponto[i].className.replace(" selecao-ativa", "");
    }
    carrossel.setAttribute('src', path + imagens[index] + '.png');
    ponto[index].className += " selecao-ativa";
}
