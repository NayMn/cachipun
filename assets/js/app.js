let cantidadDeIntentos = +prompt("¿cuantas veces quieres jugar?")

let i = 1
while (i <= cantidadDeIntentos) {

    let eleccionUsuario = (prompt("cachipun"))
    console.log(eleccionUsuario)

    let opciones = ['piedra', 'papel', 'tijeras'];
    let opcionPc = opciones[Math.floor(Math.random() * opciones.length)];


    if (eleccionUsuario.toLowerCase() === "tijeras" && opcionPc === "papel" ||
        eleccionUsuario.toLowerCase() === "papel" && opcionPc === "piedra" ||
        eleccionUsuario.toLowerCase() === "piedra" && opcionPc === "tijeras"
    ) {
        alert("ganaste")
    } else {
        alert("perdiste")
    }

    if (eleccionUsuario.toLowerCase() === opcionPc) {
        alert("empate")
    }
    i++

    console.log(
        `tu turno: ${eleccionUsuario}
         turno PC: ${opcionPc}`
    );
}




