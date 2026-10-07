let edadDerecha = [];
let edadIzquierda = [];

function pintartarTabla( array, idTabla, contenido){
    for (let i = 0; i < array.length; i++) {
            contenido += "<tr><td>" + array[i] + "</td><td><button class='btn-eliminar' onclick='eliminarEdadIzquierda(" + i + ")'>Eliminar</button></td><td><button class='btn-mover'>➜</button></td></tr>";
        }
        idTabla.innerHTML = contenido;
}


function agregarEdad(){
    let edad = recuperarEntero("edad");
    let tablaIzquierda = document.getElementById("tablaIzquierda");
    let izquierda="";
    if(edad){
        agregarNumero(edad, edadIzquierda);
        pintartarTabla(edadIzquierda, tablaIzquierda, izquierda);
    }
}

function eliminarEdadIzquierda(index){
    edadIzquierda.splice(index, 1);
    let tablaIzquierda = document.getElementById("tablaIzquierda");
    let izquierda="";
    pintartarTabla(edadIzquierda, tablaIzquierda, izquierda);
}