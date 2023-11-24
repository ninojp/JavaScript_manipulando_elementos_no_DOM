"use strict";
const elementoHTML = document.querySelector('html');
const btnFoco = document.querySelector('.app__card-button--foco');
const btnCurto = document.querySelector('.app__card-button--curto');
const btnLongo = document.querySelector('.app__card-button--longo');
const elementoIMG = document.querySelector('.app__image');

btnFoco.addEventListener('click', () => {
    elementoHTML.setAttribute('data-contexto', 'foco')
    elementoIMG.setAttribute('src', './assets/imagens/foco.png');
});
btnCurto.addEventListener('click', () => {
    elementoHTML.setAttribute('data-contexto', 'descanso-curto');
    elementoIMG.setAttribute('src', './assets/imagens/descanso-curto.png');
});
btnLongo.addEventListener('click', (event) => {
    elementoHTML.setAttribute('data-contexto', 'descanso-longo')
    elementoIMG.setAttribute('src', './assets/imagens/descanso-longo.png')
    // console.log(event)
    // alert(event)
});
