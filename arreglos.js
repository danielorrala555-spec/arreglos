let edadDerecha = [];
let edadIzquierda = [];

function pintartarTablaIzquerda( array, idTabla,){
    let contenido = "";
    for (let i = 0; i < array.length; i++) {
         contenido += "<tr><td>" + array[i] + "</td><td><button class='btn-eliminar' onclick='eliminarEdadIzquierda(" + i + ")'>Eliminar</button></td><td><button class='btn-mover' onclick='moverEdadIzquierdaADerecha(" + i + ")'>➜</button></td></tr>";
        }
        idTabla.innerHTML = contenido;
}

function pintartarTablaDerecha( array, idTabla, ){
    let contenido = "";
    for (let i = 0; i < array.length; i++) {
            contenido += "<tr><td><button class='btn-mover' onclick='moverEdadDerechaAIzquierda(" + i + ")'>⬅</button></td><td>" + array[i] + "</td><td><button class='btn-eliminar' onclick='eliminarEdadDerecha(" + i + ")'>Eliminar</button></td></tr>";
        }
        idTabla.innerHTML = contenido;
}


function agregarEdad(){
    let edad = recuperarEntero("edad");
    let tablaIzquierda = document.getElementById("tablaIzquierda");
    if(edad){
        agregarNumero(edad, edadIzquierda);
        pintartarTablaIzquerda(edadIzquierda, tablaIzquierda, );
    }
}

function eliminarEdadIzquierda(index){
    edadIzquierda.splice(index, 1);
    let tablaIzquierda = document.getElementById("tablaIzquierda");
    pintartarTablaIzquerda(edadIzquierda, tablaIzquierda, );
    
}

function eliminarEdadDerecha(index){
    edadDerecha.splice(index, 1);   
    let tablaDerecha = document.getElementById("tablaDerecha");  
    pintartarTablaDerecha(edadDerecha, tablaDerecha, );
}

function moverEdadIzquierdaADerecha(index){
    let edad = edadIzquierda[index];
    edadIzquierda.splice(index, 1);
    agregarNumero(edad, edadDerecha);
    let tablaIzquierda = document.getElementById("tablaIzquierda");
    let tablaDerecha = document.getElementById("tablaDerecha");
    pintartarTablaIzquerda(edadIzquierda, tablaIzquierda, );
    pintartarTablaDerecha(edadDerecha, tablaDerecha, );
}

function moverEdadDerechaAIzquierda(index){
    let edad = edadDerecha[index];
    edadDerecha.splice(index, 1);
    agregarNumero(edad, edadIzquierda);
    let tablaIzquierda = document.getElementById("tablaIzquierda");
    let tablaDerecha = document.getElementById("tablaDerecha");
    pintartarTablaIzquerda(edadIzquierda, tablaIzquierda, );
    pintartarTablaDerecha(edadDerecha, tablaDerecha, );
}