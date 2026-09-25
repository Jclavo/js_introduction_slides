//alert("Task: idade");
/**
 * TAREFA: Mostrar se o usuario é maior de idade.
 * ENTRADA: A idade do usuario
 * LOGICA: 
 *  - 
 * SAIDA: Mensagem
 */

const minhaIdade = prompt("Ingresse sua idade");
verificarIdade(minhaIdade);

function verificarIdade(idade) {
    if (idade >=18) {
    alert("maior de idade");
    } 
    else {
        alert("menor de idade")
    }
}







