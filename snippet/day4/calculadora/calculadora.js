const somarElemento = document.getElementById("somar");
const restarElemento = document.getElementById("restar");
const multiplicarElemento = document.getElementById("multiplicar");
const dividirElemento = document.getElementById("dividir");

somarElemento.addEventListener("click", function () {
    var valorA = parseFloat(document.getElementById("valorA").value);
    var valorB = parseFloat(document.getElementById("valorB").value);

    if (!isNaN(valorA) && !isNaN(valorB)) {
        document.getElementById("resultado").value = somar(valorA, valorB);
    } else {
        alert("Por favor, insira valores numéricos válidos.");
    }
});

restarElemento.addEventListener("click", function () {
    var valorA = parseFloat(document.getElementById("valorA").value);
    var valorB = parseFloat(document.getElementById("valorB").value);

    if (!isNaN(valorA) && !isNaN(valorB)) {
        document.getElementById("resultado").value = restar(valorA, valorB);
    } else {
        alert("Por favor, insira valores numéricos válidos.");
    }
});

multiplicarElemento.addEventListener("click", function () {
    var valorA = parseFloat(document.getElementById("valorA").value);
    var valorB = parseFloat(document.getElementById("valorB").value);

    if (!isNaN(valorA) && !isNaN(valorB)) {
        document.getElementById("resultado").value = multiplicar(valorA, valorB);
    } else {
        alert("Por favor, insira valores numéricos válidos.");
    }
});

dividirElemento.addEventListener("click", function () {
    var valorA = parseFloat(document.getElementById("valorA").value);
    var valorB = parseFloat(document.getElementById("valorB").value);

    if (!isNaN(valorA) && !isNaN(valorB) && valorB !== 0) {
        document.getElementById("resultado").value = dividir(valorA, valorB);
    } else {
        alert("Por favor, insira valores numéricos válidos e não divida por zero.");
    }
});

function somar(valorA, valorB) {
    let resultado = 0;
    resultado = valorA + valorB;
    return resultado;
}

function restar(valorA, valorB) {
    let resultado = 0;
    resultado = valorA - valorB;
    return resultado;
}

function multiplicar(valorA, valorB) {
    let resultado = 0;
    resultado = valorA * valorB;
    return resultado;
}

function dividir(valorA, valorB) {
    let resultado = 0;
    resultado = valorA / valorB;
    return resultado;
}