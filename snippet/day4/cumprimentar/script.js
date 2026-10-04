let componenteNome = document.getElementById("nome");
let componenteBotao = document.getElementById("botao");
let componenteMemsagem = document.getElementById("memsagem");

componenteBotao.addEventListener("click", function () {
    let nome = componenteNome.value;
    componenteMemsagem.textContent = "Benvindo " + nome;
});

