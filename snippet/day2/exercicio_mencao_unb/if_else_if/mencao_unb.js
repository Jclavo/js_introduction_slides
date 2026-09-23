const nota = prompt("Ingresse sua nota");

// Processar valores inválidos
if (nota < 0 || nota > 10) {
    alert("Valor inválido");
}

// Processar valores corretos
else if (nota < 5) {
    alert("Sua menção é: reprovado");
}

else if (nota < 7) {
    alert("Sua menção é: MM");
}

else if (nota < 9) {
    alert("Sua menção é: MS");
}

else {
    alert("Sua menção é: SS");
}
