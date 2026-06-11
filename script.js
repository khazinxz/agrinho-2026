let moedas = 100;
let saudeAmbiente = 80;
let minijogoLiberado = false; 

function atualizarInterface() {
    document.getElementById('moedas').innerText = moedas;
    document.getElementById('texto-ambiente').innerText = saudeAmbiente + "%";
    document.getElementById('barra-ambiente').style.width = saudeAmbiente + "%";

    if (saudeAmbiente < 40) {
        document.getElementById('barra-ambiente').style.backgroundColor = '#c62828';
    } else {
        document.getElementById('barra-ambiente').style.backgroundColor = '#2e7d32';
    }

    // DISPARADOR: Se chegar a 300 moedas, abre a tela do trator
    if (moedas >= 300 && !minijogoLiberado) {
        abrirMinijogoTrator();
    }
}

function plantar(tipo) {
    let mensagem = "";

    if (tipo === 'intensivo') {
        if (moedas >= 30) {
            moedas -= 30; 
            moedas += 60; 
            saudeAmbiente -= 20; 
            mensagem = "Você colheu Monocultura! O lucro foi alto, mas o solo perdeu nutrientes.";
        } else {
            mensagem = "Moedas insuficientes para investir em Monocultura!";
        }
    } else if (tipo === 'agrofloresta') {
        if (moedas >= 50) {
            moedas -= 50; 
            moedas += 40; 
            saudeAmbiente += 15; 
            mensagem = "Você colheu do Sistema Agroflorestal! Lucro moderado e a natureza agradece.";
        } else {
            mensagem = "Moedas insuficientes para investir em Agrofloresta!";
        }
    }

    if (saudeAmbiente > 100) saudeAmbiente = 100;
    if (saudeAmbiente <= 0) {
        saudeAmbiente = 0;
        mensagem = "Fim de Jogo! A degradação ambiental tornou a terra infértil. O Agro parou.";
    }

    document.getElementById('mensagem-sistema').innerText = mensagem;
    atualizarInterface();
}

function abrirMinijogoTrator() {
    minijogoLiberado = true; 
    document.getElementById('tela-trator').style.display = 'flex'; // Torna visível
}

function clicarNoTrator() {
    moedas += 100; 
    document.getElementById('tela-trator').style.display = 'none'; // Esconde de volta
    document.getElementById('mensagem-sistema').innerText = "Excelente! Você operou o trator e ganhou +100 Moedas de bônus!";
    atualizarInterface();
}