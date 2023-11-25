"use strict";
const elementoHTML = document.querySelector('html');
const btnFoco = document.querySelector('.app__card-button--foco');
const btnCurto = document.querySelector('.app__card-button--curto');
const btnLongo = document.querySelector('.app__card-button--longo');
const elementoIMG = document.querySelector('.app__image');
const elementoH1 = document.querySelector('.app__title');
const botoes = document.querySelectorAll('.app__card-button');
const musicaFocoInput = document.querySelector('#alternar-musica');
const musica = new Audio('./sons/luna-rise-part-one.mp3');
musica.loop = true;

musicaFocoInput.addEventListener('change', () => {
    if(musica.paused){
        musica.play();
    }else{
        musica.pause();
    }
})

btnFoco.addEventListener('click', () => {
    alterarContexto('foco');
    btnFoco.classList.add('active');
});
btnCurto.addEventListener('click', () => {
    alterarContexto('descanso-curto');
    btnCurto.classList.add('active');
});
btnLongo.addEventListener('click', (event) => {
    alterarContexto('descanso-longo');
    btnLongo.classList.add('active');
    // console.log(event)
    // alert(event)
});
function alterarContexto(contexto){
    botoes.forEach(function(contexto){
        contexto.classList.remove('active')
    });
    elementoHTML.setAttribute('data-contexto', contexto);
    elementoIMG.setAttribute('src', `./assets/imagens/${contexto}.png`);
    switch (contexto) {
        case 'foco':
            elementoH1.innerHTML = `Otimize sua produtividade,<br>
            <strong class="app__title-strong">mergulhe no que importa.</strong>`;
            break;
        case 'descanso-curto':
            elementoH1.innerHTML = `
            Que tal dar uma respirada?<br>
            <strong class="app__title-strong">Faça uma pausa curta!</strong>`;
            break;
        case 'descanso-longo':
            elementoH1.innerHTML = `
            Hora de voltar à superfície.<br>
            <strong class="app__title-strong"> Faça uma pausa longa.</strong>`;
            break;
        default:
            break;
    }
};
