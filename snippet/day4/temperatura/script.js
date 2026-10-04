const temperatura = prompt("Ingresse a temperatura");

if (temperatura < 15) {
    alert("Está fazendo frio");
}

if(temperatura > 15 && temperatura < 30) {
    alert("Está tudo bom");
}

if (temperatura > 30) {
  alert("Está calor hoje");
}

if (temperatura >= 40) {
  alert("Isso não deveria acontecer");
}