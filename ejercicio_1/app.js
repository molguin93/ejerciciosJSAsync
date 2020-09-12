
const obtenerChiste = require("./library");

// Codigo funcion callback



// Fin codigo

// Usar la funcion obtenerChiste(funcionCallback) en donde funcionCallback es una función que recibe el objeto chiste extraido
obtenerChiste(element => joke(element));

let joke = (element) => console.log(`${element[0].setup} ${element[0].punchline}`)