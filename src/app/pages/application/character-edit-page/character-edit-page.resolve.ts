import { Character } from '../../../shared/models/character';
import {
    HeroService,
    VillainService,
} from '../../../shared/services/superheroes.service';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { DataService } from '../../../shared/services/superheroes.service';

@Injectable()
export class CharacterServiceResolve
    implements Resolve<CharacterServiceResolveData>
{
    constructor(
        private readonly heroService: HeroService,
        private readonly villainService: VillainService
    ) {}

    resolve(
        route: ActivatedRouteSnapshot
    ):
        | Observable<CharacterServiceResolveData>
        | Promise<CharacterServiceResolveData>
        | CharacterServiceResolveData {
        const service =
            route.data['type'] === 'hero'
                ? this.heroService
                : this.villainService;
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
