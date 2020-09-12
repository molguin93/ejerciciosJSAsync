
const obtenerPokemon = require("./library");

// Usar la funcion obtenerPokemon(nombrePokemon) la cual recibe como string un nombre de pokemon y devuelve la promesa de traer el objeto pokemon extraido

obtenerPokemon('pikachu').then(pokemon => {
    let habilidades = pokemon.abilities.map(abilitie => {
        return abilitie.ability.name
    });
    console.log(`Nombre: ${pokemon.name} \nHabilidades: ${habilidades}`);
});
