import { Injectable } from '@angular/core';
import { Character } from '../models/character';
import { DataService } from './data.service';

@Injectable()
export class SuperheroService extends DataService<Character> {
    constructor() {
        super('heroDataTMap');
    }
}
