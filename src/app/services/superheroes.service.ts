import { Character } from './../models/characters';
import { Superheroes } from '../models/my-superheroes';
import * as uuid from 'uuid';

export class SuperheroesService {
    superheroMap: Map<string,Character> = new Map();

    constructor() {
        for (let index = 0; index < Superheroes.length; index++) {
            Superheroes[index].id = uuid.v4();
            this.superheroMap.set(Superheroes[index].id, Superheroes[index]);
        }
    }

    /**
    * Fetches an array of current favorite Characters
    * @returns Character array of current favorite Characters
    */
    getSuperheroes(): Character[] {
        // Function to return all Characters with no qualifications
        return [...this.superheroMap].map(hero => hero[1]);
    }

    /**
    * Adds a Character Object to add to superheroMap
    * @param Character  Character Object to add to superheroMap
    */
    addSuperhero(character: Character) {
        character.id = uuid.v4();
        character.color = 'green';
        // added with key to all lowercase for searchability
        this.superheroMap.set(character.id, character);
    }

    /**
    * Searches through superheroMap to find Character by name
    * @param findName Name of superhero to find in superheroMap
    * @returns Character object found in superheroMap with same name, else 
    *   undefined
    */
    findSuperhero(findName: string): Character | undefined {
        for (let index = 0; index < Superheroes.length; index++) {
            if(findName.toLowerCase == Superheroes[index].name.toLowerCase) {
                return Superheroes[index];
            }
        }
        return undefined;
    }

    /**
    * Updates a Character object based on user changes
    * @param id  Character Object to update
    * @returns Character object is findname is found in superheroMap, else 
    *   undefined
    */
    editSuperhero(hero: Character) {
        this.superheroMap.set(hero.id, hero);
    }

}
