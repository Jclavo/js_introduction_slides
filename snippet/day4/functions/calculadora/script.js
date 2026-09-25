const componenteValorA = document.getElementById("valorA");
const componenteValorB = document.getElementById("valorB");
const componente_divisor = document.getElementById("dividir");
const componenteResultado = document.getElementById("resultado");

componente_divisor.addEventListener("click", function () {
    let numeroA = componenteValorA.value;
    let numeroB = componenteValorB.value;
    dividir(numeroA, numeroB);
});

function dividir(dividendo, divisor) {
    if (divisor == 0) {
        alert("Zero não é divisor valido");
    } else {
        let resultado = Number(dividendo) / Number(divisor);
        componenteResultado.value = resultado;
    }
}
