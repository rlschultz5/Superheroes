import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { characterColorMap } from '../../../../shared/characters/configurations/character-color-map.config';
import { Character } from '../../../../shared/characters/types/character.interface';
import { SuperheroService } from '../../../../shared/superheroes/superhero.service';
import { defaultSuperheroes } from './configurations/default-superheroes.config';

@Component({
    selector: 'app-superheroes',
    templateUrl: './superheroes.component.html',
})
export class SuperheroesComponent implements OnInit {
    title: string = 'List of Superheroes:';
    superheroes?: Character[];
    initialSuperheroes: boolean = true;

    readonly characterColorMap = characterColorMap;

    constructor(private readonly superheroService: SuperheroService, private readonly router: Router) {}

    ngOnInit() {
        if (this.superheroService.isEmpty()) {
            // NOTE: Put this in assets or app.html
            for (let index = 0; index < defaultSuperheroes.length; index++) {
                this.superheroService.create(defaultSuperheroes[index]);
            }
            this.initialSuperheroes = false;
        }

        this.superheroes = this.superheroService.getAll();
    }

    routeToPage(characterId: string, routeToPage: string) {
        this.router.navigate(['/superheroes', characterId, routeToPage]);
    }

    // TODO: listen for an emit from character card and route to detail/form
}
