let soma = 0;

for (let i = 1; i <= 20; i++) { 
    if (i % 2 === 0) { 
        soma = soma + i; 
    }
} 

console.log("A soma de todos os números pares de 1 a 20 é: " + soma);