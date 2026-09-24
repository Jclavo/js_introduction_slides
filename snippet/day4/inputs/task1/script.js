let componenteBotao = document.getElementById("botao");
let componenteParagrafo = document.getElementById("mensagem");
let componenteNome = document.getElementById("nome");
let componenteBotaoLimpar = document.getElementById("limpar");

componenteBotao.style.color = "red";

componenteBotao.addEventListener("click", function () {
    let nome = componenteNome.value;

    if (nome == "" ) {
        alert("Digite seu nome!!!!");
    } else {
        componenteParagrafo.textContent = "Bem-vindo " + nome;
    }
});

componenteBotaoLimpar.addEventListener("click", function () {
    componenteNome.value = "";
});


