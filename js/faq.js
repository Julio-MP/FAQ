let perguntas = null;

// Carregar perguntas do arquivo JSON
fetch("js/Texto.JSON")
    .then(function(response) {
        return response.json();
    })
    .then(function(dados) {
        console.log(dados);
        perguntas = dados.faq;
        
        colocaPerguntas();
    });

// Função que coloca as perguntas na página
function colocaPerguntas() {
    let pergunta1Div = document.querySelector('.FAQ__Pergunta1');
    let pergunta2Div = document.querySelector('.FAQ__Pergunta2');
    let pergunta3Div = document.querySelector('.FAQ__Pergunta3');
    let pergunta4Div = document.querySelector('.FAQ__Pergunta4');

    let resposta1Div = document.querySelector('.FAQ__Resposta1');
    let resposta2Div = document.querySelector('.FAQ__Resposta2');
    let resposta3Div = document.querySelector('.FAQ__Resposta3');
    let resposta4Div = document.querySelector('.FAQ__Resposta4');


    pergunta1Div.innerHTML = `<h3 class="FAQ__Pergunta">${perguntas[0].pergunta}</h3> <button class="FAQ__Buttons FAQ__Pergunta" type="button"><img src="assets/Botao_mais.png" alt="Mostrar"></button>`;
    pergunta2Div.innerHTML = `<h3 class="FAQ__Pergunta">${perguntas[1].pergunta}</h3> <button class="FAQ__Buttons FAQ__Pergunta" type="button"><img src="assets/Botao_mais.png" alt="Mostrar"></button>`;
    pergunta3Div.innerHTML = `<h3 class="FAQ__Pergunta">${perguntas[2].pergunta}</h3> <button class="FAQ__Buttons FAQ__Pergunta" type="button"><img src="assets/Botao_mais.png" alt="Mostrar"></button>`;
    pergunta4Div.innerHTML = `<h3 class="FAQ__Pergunta">${perguntas[3].pergunta}</h3> <button class="FAQ__Buttons FAQ__Pergunta" type="button"><img src="assets/Botao_mais.png" alt="Mostrar"></button>`;


    pergunta1Div.querySelector('button').addEventListener('click', function() {
        mostrarResposta1(resposta1Div);
    });

    pergunta2Div.querySelector('button').addEventListener('click', function() {
        mostrarResposta2(resposta2Div);
    });

    pergunta3Div.querySelector('button').addEventListener('click', function() {
        mostrarResposta3(resposta3Div);
    });

    pergunta4Div.querySelector('button').addEventListener('click', function() {
        mostrarResposta4(resposta4Div);
    });
}

function mostrarResposta1(respostaDiv) {
    if (respostaDiv.innerHTML === "") { 
        respostaDiv.innerHTML = `<p>${perguntas[0].resposta}</p>`;
    } else { 
        respostaDiv.innerHTML = ""; 
    }
}


function mostrarResposta2(respostaDiv) {
    if (respostaDiv.innerHTML === "") { 
        respostaDiv.innerHTML = `<p>${perguntas[1].resposta}</p>`;
    } else { 
        respostaDiv.innerHTML = ""; 
    }
}

function mostrarResposta3(respostaDiv) {
    if (respostaDiv.innerHTML === "") { 
        respostaDiv.innerHTML = `<p>${perguntas[2].resposta}</p>`;
    } else { 
        respostaDiv.innerHTML = ""; 
    }
}

function mostrarResposta4(respostaDiv) {
    if (respostaDiv.innerHTML === "") { 
        respostaDiv.innerHTML = `<p>${perguntas[3].resposta}</p>`;
    } else { 
        respostaDiv.innerHTML = ""; 
    }
}



function ocultaResposta1() {
    
}