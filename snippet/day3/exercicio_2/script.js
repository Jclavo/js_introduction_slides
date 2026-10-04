const botao = document.getElementById("botao");
const retangulo = document.getElementById("retangulo");

botao.addEventListener("click", function () {

    const color = prompt("Ingresse uma cor (no ingles):");
    retangulo.style.backgroundColor = color;
});