export class NewPokemon {
    constructor(public readonly id: number,public name: string){}

    public scream() {
        console.log(`No Quiero!!!`)
    }

    public speak() {
        console.log(`No quiero hablar!!!`)
    }
}

// Puede modificar el comportamiento de la clase 
const MyDecorator = () => {
    return ( target: Function ) => {
    console.log("🚀 ~ return ~ target:", target)
        return NewPokemon
    }
}

@MyDecorator()
export class Pokemon {
    constructor(public readonly id: number,public name: string){}

    public scream() {
        console.log(`${this.name.toUpperCase()}!!!`)
    }

    public speak() {
        console.log(`${this.name}, ${this.name}`)
    }
}

export const charmander = new Pokemon(4, 'Charmander');

charmander.scream();
charmander.speak();