import { Characters, Superheroes } from './../characters';

export class SuperheroesService {
    getSuperheroes() {
        return Superheroes;
        // return ["Wolverine", "Captain America", "Storm"];
    }
    findSuperhero(findName: string) {
        for (let index = 0; index < Superheroes.length; index++) {
            const currHero = Superheroes[index];
            if(Superheroes[index].name == findName) {
                // TODO: Receive and print it where it's called
                return currHero;
            }
        }
        // TODO: Return a print statement that no Superhero by that name exists
        return -1;
    }
    // TODO: Edit Superhero method
    editSuperhero(editHero: string[6]) {
        editHero[0];
    }
}
