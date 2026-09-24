let componenteBotao = document.getElementById("botao");
let componenteParagrafo = document.getElementById("mensagem");

componenteBotao.style.color = "red";

componenteBotao.addEventListener("click", function () {
    // codigo
    // alert("Benvindo ....");

    componenteParagrafo.textContent = "Bem-vindo José";
});