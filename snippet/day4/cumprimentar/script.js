let componenteNome = document.getElementById("nome");
let componenteBotao = document.getElementById("botao");
let componenteMemsagem = document.getElementById("memsagem");

componenteBotao.addEventListener("click", function () {
    let nome = componenteNome.value;
    componenteMemsagem.textContent = cumprimentar(nome);
});

function cumprimentar(nome) {
    let memsagem = "Bem-vindo/a/e: " + nome;
    return memsagem;
}