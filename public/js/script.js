function comecarGame(){
    const blocoComeco = document.getElementById('comeco');
    const blocoExplicacao = document.getElementById('explicacao');

    blocoComeco.style.opacity = 0;
    blocoComeco.style.transition = 'opacity 1s';
    setTimeout(function(){
        blocoComeco.style.display = 'none';
    }, 1000);
    

    blocoExplicacao.style.display = 'flex';
    setTimeout(function(){
        blocoExplicacao.style.opacity = 1;
    }, 1000);
    
}