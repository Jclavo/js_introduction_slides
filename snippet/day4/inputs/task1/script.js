let componenteBotao = document.getElementById("botao");
let componenteParagrafo = document.getElementById("mensagem");
let componenteNome = document.getElementById("nome");

componenteBotao.style.color = "red";

componenteBotao.addEventListener("click", function () {
    // codigo
    // alert("Benvindo ....");
    
    let nome = componenteNome.value;

    componenteParagrafo.textContent = "Bem-vindo " + nome;
});