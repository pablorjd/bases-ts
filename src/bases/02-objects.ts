

export const pokemonIds = [1,2,34,5,6,3];

interface Pokemon {
    id: number;
    name: string;
    age: number;
}

export const charizard:Pokemon = {
    id: 1,
    name: 'Charizard',
    age: 2,
}

export const charmander:Pokemon = {
    id: 2,
    name: 'Charmander',
    age: 1,
}


export const pokemons:Pokemon[] = [];

pokemons.push(charizard,charmander)
console.log("🚀 ~ pokemons:", pokemons)

