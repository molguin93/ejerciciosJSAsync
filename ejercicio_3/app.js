
const obtenerPokemon = require("./library");

// Codigo funcion callback

//let pokemon = (element) => console.log(element)

let pokemon = (element) => { 
    let abilites = element.abilities.map(abilitie => {
        return abilitie.ability.name
    });
    console.log(`Nombre: ${element.name} `) 
    console.log(`Habilidades: ${abilites}  `) 
}

// Fin codigo

// Usar la funcion obtenerPokemon(pokemon,funcionCallback) en donde:
// - nombrePokemon es un string con el nombre del pokemon
// - funcionCallback es una función que recibe el objeto con los datos del pokemon extraido

obtenerPokemon('pikachu', pokemon);


