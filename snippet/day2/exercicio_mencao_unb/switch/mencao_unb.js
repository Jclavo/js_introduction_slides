const nota = Number(prompt("Ingresse sua nota"));

switch (true) {
    case nota < 0 || nota > 10:
        alert("Valor inválido");
        break;

    case nota < 5:
        alert("Sua menção é: reprovado");
        break;

    case nota < 7:
        alert("Sua menção é: MM");
        break;

    case nota < 9:
        alert("Sua menção é: MS");
        break;

    default:
        alert("Sua menção é: SS");
}
