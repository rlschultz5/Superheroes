import { Superheroes } from '../../../../shared/models/default-superheroes';
import { Character } from '../../models/character';
import { Component, OnInit } from '@angular/core';
import { characterColorMap } from '../../models/characterColorMap';
import { SuperheroService } from '../../services/superhero.service';

@Component({
    selector: 'app-superheroes',
    templateUrl: './superheroes-page.component.html',
})
export class SuperheroesPageComponent implements OnInit {
    title: string = 'List of Superheroes:';
    superheroes?: Character[];
    initialSuperheroes: boolean = true;
    characterCardDetails!: { characterName: string; characterRealName: string; characterColor: string };

    readonly characterColorMap = characterColorMap;

    constructor(private readonly superheroService: SuperheroService) {}

    ngOnInit() {
        if (this.superheroService.isEmpty()) {
            for (let index = 0; index < Superheroes.length; index++) {
                this.superheroService.create(Superheroes[index]);
            }
            this.initialSuperheroes = false;
        }

        this.superheroes = this.superheroService.getAll();
    }

    routeToPage(detailOrForm: string) {}

    // TODO: listen for an emit from character card and route to detail/form
}
