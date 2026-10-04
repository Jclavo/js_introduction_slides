const USUARIO_DEFAULT = "admin"
const SENHA_DEFAULT = "semuni@2026"

const botaoLoginElemento = document.getElementById("login");
const botaoLimparElemento = document.getElementById("limpar");
const usuarioElemento = document.getElementById("usuario");
const senhaElemento = document.getElementById("senha");

botaoLoginElemento.addEventListener("click", function () {

    const usuario = usuarioElemento.value;
    const senha = senhaElemento.value;

    if (usuario == USUARIO_DEFAULT && senha == SENHA_DEFAULT) {
        alert("Accesso ao sistema com sucesso.");
    } else {
        alert("Credencias invalidas.");
    }
});

botaoLimparElemento.addEventListener("click", function () {

    usuarioElemento.value = "";
    senhaElemento.value = "";
});