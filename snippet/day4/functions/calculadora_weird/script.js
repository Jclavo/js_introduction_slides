const componenteValorA = document.getElementById("valorA");
const componenteValorB = document.getElementById("valorB");
const componenteSomar = document.getElementById("somar");
const componenteResultado = document.getElementById("resultado");

componenteSomar.addEventListener("click", function () {
    let numeroA = componenteValorA.value;
    let numeroB = componenteValorB.value;
    let resultado = Number(numeroA) + Number(numeroA);
    componenteResultado.value = resultado;
});


