let pontuacao = 0;

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
    blocoPreparados.style.opacity = 0;
    blocoPreparados.style.transition = 'opacity 1.5s';
    setTimeout(function(){
        blocoPreparados.style.opacity = 1;
    }, 1000);
}

function comecarDesafio(){
    const blocoPreparados = document.getElementById('preparados');
    const blocoDesafio = document.getElementById('desafio');

    blocoPreparados.style.opacity = 0;
    blocoPreparados.style.transition = 'opacity 1s';
    setTimeout(function(){
        blocoPreparados.style.display = 'none';
    }, 1000);
    
    blocoDesafio.style.display = 'flex';
    blocoDesafio.style.opacity = 0;
    blocoDesafio.style.transition = 'opacity 1.5s';
    setTimeout(function(){
        blocoDesafio.style.opacity = 1;
    }, 1000);
}

function responder1(resposta){
    const blocoDesafio = document.getElementById('desafio');
    const blocoResposta = document.getElementById('resposta1');

    Swal.fire({
        title: 'Você tem certeza?',
        text: "Não será possível reverter essa ação!",
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sim, tenho certeza',
        cancelButtonText: 'Não, quero trocar minha resposta'
      }).then((result) => {
        if (result.isConfirmed) {
            blocoDesafio.style.opacity = 0;
            blocoDesafio.style.transition = 'opacity 1s';
            setTimeout(function(){
                blocoDesafio.style.display = 'none';
            }, 1000);

            blocoResposta.style.display = 'flex';
            blocoResposta.style.opacity = 0;
            blocoResposta.style.transition = 'opacity 1.5s';
            setTimeout(function(){
                blocoResposta.style.opacity = 1;
            }, 1000);

            if(resposta == 'verdadeiro'){
                document.getElementById('acertou1').style.display = 'flex';
                pontuacao += 500 + Math.floor(Math.random() * 100);
            }
            if(resposta == 'falso'){
                document.getElementById('errou1').style.display = 'flex';
            }   
        } 
    })
}

