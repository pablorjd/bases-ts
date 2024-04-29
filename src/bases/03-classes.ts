
// Forma corta de larga una clase
// export class Pokemon {
//     public id: number;
//     public name: string;

import axios from "axios";
import { Move, PokeApiResponse } from "../interfaces/pokeapi-response.interfaces";


//     constructor(id: number, name: string) {
//         this.id = id;
//         this.name = name
//         console.log("🚀 ~ Pokemon ~ constructor")
//     }
// }

// Forma corta de crear una clase
export class Pokemon {


    constructor(
        public readonly id: number, 
        public name: string,
    ) {}

    get imageUrl(): string {
        return `https://pokemon.com/${this.id}.png`;
    }

    public scream() {
        console.log(`${this.name.toUpperCase()}!!!`)
    }

    public speak() {
        console.log(`${this.name}, ${this.name}`)
    }

    // async function
    async getMoves(): Promise<Move[]> {
        const url = `https://pokeapi.co/api/v2/pokemon/4`;
        const { data } = await axios.get<PokeApiResponse>(url);
        return data.moves;
    }
}
export const pikachu = new Pokemon(1,'Pikachu');
pikachu.getMoves();