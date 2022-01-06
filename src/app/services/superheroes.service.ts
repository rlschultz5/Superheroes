import { Character } from './../models/character';
import { Superheroes } from '../models/default-superheroes';
import * as rxjs from 'rxjs';
import * as uuid from 'uuid';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

// TODO: Turn into generic class
export abstract class DataService<DataT extends { id: string }> {
    key: string;
    data: Map<string, DataT> = new Map();

    constructor(key: string) {
        this.key = key;
        const json = localStorage.getItem(key);
        if (json !== null) {
            this.data = JSON.parse(json, this.reviver);
            // } else {
            //     for (let index = 0; index < Superheroes.length; index++) {
            //         Superheroes[index].id = uuid.v4();
            //         this.data.set(Superheroes[index].id, Superheroes[index]);
            //     }
        }
    }

    /**
     * Fetches an array of current favorite DataTs
     * @returns DataT array of current favorite DataTs
     */
    getAll(): DataT[] {
        // Function to return all DataTs with no qualifications
        return [...this.data].map((character) => character[1]);
    }

    /**
     * Fetches an array of current favorite DataTs
     * @returns DataT array of current favorite DataTs
     */
    getById(characterId: string): DataT {
        // Function to return all DataTs with no qualifications
        return this.data.get(characterId)!;
    }

    /**
     * Deletes chosen character
     * @param characterId ID of superhero to be removed
     */
    delete(characterId: string) {
        this.data.delete(characterId);
        localStorage.setItem(
            this.key,
            JSON.stringify(this.data, this.replacer)
        );
    }

    /**
     * Adds a DataT Object to add to characterMap
     * @param DataT  DataT Object to add to characterMap
     */
    //TODO: return DataT??
    create(character: DataT): Observable<DataT> {
        character.id = uuid.v4();
        // TODO: Fix color issue
        // character.color = 'green';
        // added with key to all lowercase for searchability
        this.data.set(character.id, character);
        localStorage.setItem(
            this.key,
            JSON.stringify(this.data, this.replacer)
        );
        return rxjs.of(character);
    }

    isEmpty(): boolean {
        if (this.data.size === 0) {
            return true;
        }
        return false;
    }

    /**
     * Searches through characterMap to find DataT by name
     * @param findName Name of superhero to find in characterMap
     * @returns DataT object found in characterMap with same name, else
     *   undefined
     */
    // Only searching through predefined lists
    // search(findName: string): DataT | undefined {
    //     for (let index = 0; index < Superheroes.length; index++) {
    //         if (findName.toLowerCase == Superheroes[index].name.toLowerCase) {
    //             return Superheroes[index];
    //         }
    //     }
    //     return undefined;
    // }

    /**
     * Updates a DataT object based on user changes
     * @param id  DataT Object to update
     * @returns DataT object is findname is found in characterMap, else
     *   undefined
     */
    update(hero: DataT): Observable<DataT> {
        this.data.set(hero.id, hero);
        localStorage.setItem(
            this.key,
            JSON.stringify(this.data, this.replacer)
        );
        return rxjs.of(hero);
    }

    private replacer(key: any, value: any) {
        if (value instanceof Map) {
            return {
                dataType: 'Map',
                value: Array.from(value.entries()), // or with spread: value: [...value]
            };
        } else {
            return value;
        }
    }
    private reviver(key: any, value: any) {
        if (typeof value === 'object' && value !== null) {
            if (value.dataType === 'Map') {
                return new Map(value.value);
            }
        }
        return value;
    }
}
@Injectable()
export class HeroService extends DataService<Character> {
    constructor() {
        super('heroDataTMap');
    }
}
@Injectable()
export class VillainService extends DataService<Character> {
    constructor() {
        super('villainDataTMap');
    }
}
