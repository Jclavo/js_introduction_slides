const componenteValorA = document.getElementById("valorA");
const componenteValorB = document.getElementById("valorB");
const componenteSomar = document.getElementById("somar");
const componenteSomarRepetido = document.getElementById("somar_repetido");
const componenteResultado = document.getElementById("resultado");

componenteSomar.addEventListener("click", function () {
    let numeroA = componenteValorA.value;
    let numeroB = componenteValorB.value;
    somar(numeroA, numeroB);
});

componenteSomarRepetido.addEventListener("click", function () {
    let numeroA = componenteValorA.value;
    let numeroB = componenteValorB.value;
    somar(numeroA, numeroB);
});

function somar(a, b) {
    let resultado = Number(a) + Number(b);
    componenteResultado.value = resultado;
}


