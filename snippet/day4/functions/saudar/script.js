const nome = prompt("Digite seu nome");
const idade = prompt("Digite sua idade");

cumprimentar(nome, idade);
cumprimentar("Neymar", idade);
cumprimentar("Maradona", "60");

function cumprimentar(nomeDaPessoa, idadeDaPessoa) {
    alert("Bem-vindo " + nomeDaPessoa + " sua idade é "+ idadeDaPessoa);
}

// função saudar
function saudar() {
    alert("Olá! Eu sou uma função");
}

