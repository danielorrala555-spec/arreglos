let edadDerecha = [];
let edadIzquierda = [];

function agregarEdad(){
    let edad = recuperarEntero("edad");
    let tablaIzquierda = document.getElementById("tablaIzquierda");
    let zquierda="<tr>";
    if(edad){
        agregarNumero(edad, edadIzquierda);
        for (let i = 0; i < edadIzquierda.length; i++) {
            zquierda += "<td>" + edadIzquierda[i] + "</td>";
        }
        zquierda += "<td><button class='btn-eliminar'>Eliminar</button></td>";
        zquierda += "<td><button class='btn-mover'>➜</button></td>";
        zquierda += "</tr>";
    }
        tablaIzquierda.innerHTML += zquierda;
}
