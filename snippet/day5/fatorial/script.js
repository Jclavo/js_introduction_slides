console.log("fatorial de 5 = " + fatorial(5)); 
console.log("fatorial de 3 = " + fatorial(3));

function fatorial(numero) { 
    let resultado = 1; 
    for (let i = 1; i <= numero; i++) { 
        resultado = resultado * i; 
    } 
    return resultado; 
}