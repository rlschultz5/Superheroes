import { Injectable } from '@angular/core';
import { Character } from '../characters/types/character.interface';
import { DataService } from '../data-access/data.service';

@Injectable({ providedIn: 'root' })
export class SuperheroService extends DataService<Character> {
    constructor() {
        super('superheroDataTMap');
    }
}
