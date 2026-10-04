const botao = document.getElementById("botao");
const paragrafo = document.getElementById("paragrafo");

botao.addEventListener("click", function () {

    paragrafo.style.fontFamily = "monospace";
    alert("O estilo foi mudado");
});