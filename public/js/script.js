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
                pontuacao += 10; //consolação
            }   
        } 
    })
}

function mostrarPergunta2(){

    const blocoResposta = document.getElementById('resposta1');
    const blocoDesafio = document.getElementById('desafio2');

    blocoResposta.style.opacity = 0;
    blocoResposta.style.transition = 'opacity 1s';
    setTimeout(function(){
        blocoResposta.style.display = 'none';
    }, 1000);
    
    blocoDesafio.style.display = 'flex';
    blocoDesafio.style.opacity = 0;
    blocoDesafio.style.transition = 'opacity 1.5s';
    setTimeout(function(){
        blocoDesafio.style.opacity = 1;
    }, 1000);
}

function responder2(resposta){
    const blocoDesafio = document.getElementById('desafio2');
    const blocoResposta = document.getElementById('resposta2');

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
                document.getElementById('acertou2').style.display = 'flex';
                pontuacao += 500 + Math.floor(Math.random() * 100);
            }
            if(resposta == 'falso'){
                document.getElementById('errou2').style.display = 'flex';
                pontuacao += 10; //consolação
            }   
        } 
    })
}

function mostrarPergunta3(){
    
    const blocoResposta = document.getElementById('resposta2');
    const blocoDesafio = document.getElementById('desafio3');
    
    blocoResposta.style.opacity = 0;
    blocoResposta.style.transition = 'opacity 1s';
    setTimeout(function(){
        blocoResposta.style.display = 'none';
    }, 1000);
        
    blocoDesafio.style.display = 'flex';
    blocoDesafio.style.opacity = 0;
    blocoDesafio.style.transition = 'opacity 1.5s';
    setTimeout(function(){
        blocoDesafio.style.opacity = 1;
    }, 1000);
}

function responder3(resposta){
    const blocoDesafio = document.getElementById('desafio3');
    const blocoResposta = document.getElementById('resposta3');

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
                document.getElementById('acertou3').style.display = 'flex';
                pontuacao += 500 + Math.floor(Math.random() * 100);
            }
            if(resposta == 'falso'){
                document.getElementById('errou3').style.display = 'flex';
                pontuacao += 10; //consolação
            }   
        } 
    })
}

function mostrarPergunta4(){ 
    const blocoResposta = document.getElementById('resposta3');
    const blocoDesafio = document.getElementById('desafio4');
        
    blocoResposta.style.opacity = 0;
    blocoResposta.style.transition = 'opacity 1s';
    setTimeout(function(){
        blocoResposta.style.display = 'none';
    }, 1000);
            
    blocoDesafio.style.display = 'flex';
    blocoDesafio.style.opacity = 0;
    blocoDesafio.style.transition = 'opacity 1.5s';
    setTimeout(function(){
        blocoDesafio.style.opacity = 1;
    }, 1000);
}

function responder4(resposta){
    const blocoDesafio = document.getElementById('desafio4');
    const blocoResposta = document.getElementById('resposta4');

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
                document.getElementById('acertou4').style.display = 'flex';
                pontuacao += 500 + Math.floor(Math.random() * 100);
            }
            if(resposta == 'falso'){
                document.getElementById('errou4').style.display = 'flex';
                pontuacao += 10; //consolação
            }   
        } 
    })
}

function mostrarPontuacao(){
    const blocoResposta = document.getElementById('resposta4');
    const blocoPontuacao = document.getElementById('fim');

    blocoResposta.style.opacity = 0;
    blocoResposta.style.transition = 'opacity 1s';
    setTimeout(function(){
        blocoResposta.style.display = 'none';
    }, 1000);
            
    blocoPontuacao.style.display = 'flex';
    blocoPontuacao.style.opacity = 0;
    blocoPontuacao.style.transition = 'opacity 1.5s';
    setTimeout(function(){
        blocoPontuacao.style.opacity = 1;
        tsParticles.load("tsparticles", {
            particles: {
                number: {
                    value: 200,
                },
                color: {
                    value: ["#ff0000", "#00ff00", "#0000ff", "#ffff00", "#ff00ff", "#00ffff"],
                },
                shape: {
                    type: "circle",
                },
                size: {
                    value: 10,
                    random: true,
                    anim: {
                        enable: true,
                        speed: 5,
                        size_min: 0.1,
                        sync: false,
                    },
                },
                line_linked: {
                    enable: false,
                },
                move: {
                    direction: "none",
                    enable: true,
                    out_mode: "out",
                    random: false,
                    speed: 5,
                    straight: false,
                },
                opacity: {
                    anim: {
                        enable: true,
                        speed: 1,
                        opacity_min: 0.05,
                    },
                },
            },
            interactivity: {
                events: {
                    onclick: {
                        enable: true,
                        mode: "push",
                    },
                },
                modes: {
                    push: {
                        particles_nb: 1,
                    },
                },
            },
            retina_detect: false,
        });
    }, 1000);

    pontuacao = Math.round(pontuacao);
    document.getElementById('resultado').innerHTML = pontuacao;

}

// Particulas de fundo
tsParticles.load("tsparticles", {
    particles: {
        number: {
            value: 150
        },
        color: {
            value: "#ffffff"
        },
        shape: {
            type: "circle"
        },
        opacity: {
            value: 0.7,
            random: true
        },
        size: {
            value: 3,
            random: true
        },
        move: {
            enable: true,
            speed: 1.5
        }
    },
    interactivity: {
        events: {
            onhover: {
                enable: true,
                mode: "repulse"
            }
        },
        modes: {
            repulse: {
                distance: 100,
                duration: 0.4
            }
        }
    },
    background: {
        color: "#000000"
    }
});