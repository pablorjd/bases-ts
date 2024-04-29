import { Move, PokeApiResponse } from "../interfaces/pokeapi-response.interfaces";
import { HttpApapter, PokeApiApdater, PokeApiFetchApdater } from "../api/pokeApi.adapter";



export class Pokemon {
    constructor(
        public readonly id: number, 
        public name: string,
        private readonly http:HttpApapter
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
        const data  = await this.http.get<PokeApiResponse>(url);
        console.log(data.moves[0].move.name);
        return data.moves;
    }
}

const adapter = new PokeApiApdater();
const adapterFetch = new PokeApiFetchApdater();
export const pikachu = new Pokemon(1,'Pikachu',adapter);
pikachu.getMoves();