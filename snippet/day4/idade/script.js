/**
 * TAREFA: Mostrar se o usuario é maior de idade.
 * ENTRADA: A idade do usuario
 * LOGICA: 
 *  - 
 * SAIDA: Mensagem
 */

const minhaIdade = prompt("Ingresse sua idade:");

verificarIdade(minhaIdade);

function verificarIdade(idade) {
    if (idade >= 18) {
        alert("Maior de idade");
    }
    else {
        alert("Menor de idade")
    }
}







