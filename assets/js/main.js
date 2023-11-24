"use strict";
const elementoHTML = document.querySelector('html');
const btnFoco = document.querySelector('.app__card-button--foco');
const btnCurto = document.querySelector('.app__card-button--curto');
const btnLongo = document.querySelector('.app__card-button--longo');

btnFoco.addEventListener('click', (event) => {
    elementoHTML.setAttribute('data-contexto', 'foco')
    alert(event)
});
btnCurto.addEventListener('click', () => {
    elementoHTML.setAttribute('data-contexto', 'descanso-curto')
});
btnLongo.addEventListener('click', (event) => {
    elementoHTML.setAttribute('data-contexto', 'descanso-longo')
    // console.log(event)
    alert(event)
});
