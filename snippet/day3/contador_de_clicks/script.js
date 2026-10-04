const botao = document.getElementById("botao");
const resultado = document.getElementById("resultado");

let contador = 0;

botao.addEventListener("click", function () {

    contador = contador + 1;
    resultado.textContent = "Número de vezes o botão foi clicado: " + contador;
});