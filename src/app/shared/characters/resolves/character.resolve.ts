import { Character } from '../types/character.interface';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { DataService } from '../../data-access/data.service';
import { SuperheroService } from '../../superheroes/superhero.service';
import { VillainService } from '../../villains/villain.service';

@Injectable()
export class CharacterServiceResolve implements Resolve<CharacterServiceResolveData> {
    constructor(private readonly superheroService: SuperheroService, private readonly villainService: VillainService) {}

    resolve(
        route: ActivatedRouteSnapshot
    ): Observable<CharacterServiceResolveData> | Promise<CharacterServiceResolveData> | CharacterServiceResolveData {
        const service = route.data['type'] === 'superhero' ? this.superheroService : this.villainService;
        const id = route.paramMap.get('id') as string;
        return {
            service,
            character: service.getById(id),
            id,
        };
    }
}

export interface CharacterServiceResolveData {
    service: DataService<Character>;
    character: Character;
    id: string;
}
