let cantidadDeIntentos = +prompt("¿cuantas veces quieres jugar?");
let puntajeUsuario = 0;
let puntajePc = 0;


for (let i = 1; i <= cantidadDeIntentos; i++) {

    let eleccionUsuario = (prompt("piedra, papel o tijeras"));
    let opciones = ['piedra', 'papel', 'tijeras'];
    let opcionPc = opciones[Math.floor(Math.random() * opciones.length)];


    if (eleccionUsuario.toLowerCase() === "tijeras" && opcionPc === "papel" ||
        eleccionUsuario.toLowerCase() === "papel" && opcionPc === "piedra" ||
        eleccionUsuario.toLowerCase() === "piedra" && opcionPc === "tijeras"
    ) {
        alert("ganaste"); puntajeUsuario++;

    } else if (eleccionUsuario.toLowerCase() === opcionPc) {
        alert("empate")
    } else {
        alert("perdiste"); puntajePc++;
    }


    console.log(
        `tu turno: ${eleccionUsuario}
         turno PC: ${opcionPc}`
    );

    console.log(eleccionUsuario)
}

if (puntajeUsuario > puntajePc) {
    alert(`Felicidades! tienes: ${puntajeUsuario} puntos.`);
} else if (puntajeUsuario < puntajePc) {
    alert(`Pc gano con: ${puntajePc} puntos.`);
} else {
    alert(`empate!`)
}





