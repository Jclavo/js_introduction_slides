//alert("Task: idade");
/**
 * TAREFA: Mostrar se o usuario é maior de idade.
 * ENTRADA: A idade do usuario
 * LOGICA: 
 *  - 
 * SAIDA: Mensagem
 */

const idade = prompt("Ingresse sua idade");

if (idade < 0) {
    alert("Idade invalidade");
}

if (idade >= 0 && idade < 18) {
    alert("Voce é menor de idade");
}

if (idade >= 18 && idade <= 120) {
    alert("Voce é maior de idade");
}

if (idade > 120) {
    alert("Idade invalidade");
}







