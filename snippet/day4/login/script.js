const EMAIL_CERTO = "pepe@unb.br";
const SENHA_CERTA = "wannacry";

let componentEmail = document.getElementById("email");
let componentSenha = document.getElementById("senha");
let componentMemsagem = document.getElementById("memsagem");

let componentBotaoEntrar = document.getElementById("botao-entrar");
let componentBotaoLimpar = document.getElementById("botao-limpar");

componentBotaoEntrar.addEventListener("click", function () {
  let email = componentEmail.value;
  let senha = componentSenha.value;

  if (email == EMAIL_CERTO && senha == SENHA_CERTA) {
    componentMemsagem.textContent = "Logim com sucesso";
    componentMemsagem.style.color = "green";
  }
  else {
    componentMemsagem.textContent = "Credencias Invalidas";
    componentMemsagem.style.color = "red";
  }
});

componentBotaoLimpar.addEventListener("click", function () {
  componentEmail.value = "";
  componentSenha.value = "";
  componentMemsagem.style.color = "gray";
});