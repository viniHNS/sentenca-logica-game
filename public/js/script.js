function comecarGame(){
    const blocoComeco = document.getElementById('comeco');
    const blocoExplicacao = document.getElementById('explicacao');

    blocoComeco.style.opacity = 0;
    blocoComeco.style.transition = 'opacity 1s';
    setTimeout(function(){
        blocoComeco.style.display = 'none';
    }, 1000);
    

    blocoExplicacao.style.display = 'flex';
    blocoExplicacao.style.opacity = 0;
    blocoExplicacao.style.transition = 'opacity 1.5s';
    setTimeout(function(){
        blocoExplicacao.style.opacity = 1;
    }, 1000);
}

function mostrarExemplos(){
    const blocoExplicacao = document.getElementById('explicacao');
    const blocoExemplos = document.getElementById('exemplos');

    blocoExplicacao.style.opacity = 0;
    blocoExplicacao.style.transition = 'opacity 1s';
    setTimeout(function(){
        blocoExplicacao.style.display = 'none';
    }, 1000);
    

    blocoExemplos.style.display = 'flex';
    blocoExemplos.style.opacity = 0;
    blocoExemplos.style.transition = 'opacity 1.5s';
    setTimeout(function(){
        blocoExemplos.style.opacity = 1;
    }, 1000);
}

function mostrarPreparados(){
    const blocoExemplos = document.getElementById('exemplos');
    const blocoPreparados = document.getElementById('preparados');

    blocoExemplos.style.opacity = 0;
    blocoExemplos.style.transition = 'opacity 1s';
    setTimeout(function(){
        blocoExemplos.style.display = 'none';
    }, 1000);
    

    blocoPreparados.style.display = 'flex';
    setTimeout(function(){
        blocoPreparados.style.opacity = 1;
    }, 1000);
}