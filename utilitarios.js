function recuperarTexto(idComponente){
    let componente=document.getElementById(idComponente);
    let valor =componente.value;
    return valor; 
}
function recuperarFloat(idComponente){
   let valorTexto=recuperarTexto(idComponente);
   let valorFloat=parseFloat(valorTexto)
   return valorFloat;
}
function recuperarEntero(idComponente){
   let valorTexto=recuperarTexto(idComponente);
   let valorEntero=parseInt(valorTexto)
   return valorEntero;
}

function generarAleatorio(min,max){
    let random=Math.random();
    let numero=random*(max-min+1);
    let numeroEntero = Math.ceil(numero);
    numeroEntero = numeroEntero+min-1;
    return numeroEntero
}

function mostrarEnSpam(idSpan, valor){
let puntos =document.getElementById(idSpan);
        puntos.innerHTML = valor;
}
function recuperarTextoValidacion(idComponente){
    let componente=document.getElementById(idComponente);
    let valor =componente.value.trim();
    return valor; 
}

function agregarNumero(numero, array){
    array.push(numero);
}
