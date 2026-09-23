const nota = prompt("Ingresse sua nota");

// processar os valores invalidos
if (nota < 0) {
    alert("Valor invalido");
}

if (nota > 10) {
    alert("Valor invalido");
}

// processar os valores corretos

if (nota >= 0 && nota < 5) {
    alert("Sua menção é: reprovado");
}

if (nota >= 5 && nota < 6.9) {
    alert("Sua menção é: MM");
}

if (nota >= 7 && nota < 8.9) {
    alert("Sua menção é: MS");
}

if (nota >= 8 && nota <= 10) {
    alert("Sua menção é: SS");
}