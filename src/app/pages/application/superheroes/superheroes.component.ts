import { Superheroes } from '../../../shared/models/default-superheroes';
import { Character } from '../../../shared/models/character';
import { Component, OnInit } from '@angular/core';
import { HeroService } from '../../../shared/services/superheroes.service';
import { characterColorMap } from '../../../shared/models/characterColorMap';

@Component({
    selector: 'app-superheroes',
    templateUrl: './superheroes.component.html',
})
export class SuperheroesComponent implements OnInit {
    title: string = 'List of Superheroes:';
    superheroes?: Character[];
    initialSuperheroes: boolean = true;

    readonly characterColorMap = characterColorMap;

    // Auto-constructs an instance shared with app and passes it in
    constructor(private readonly heroService: HeroService) {}

    ngOnInit() {
        if (this.heroService.isEmpty()) {
            for (let index = 0; index < Superheroes.length; index++) {
                this.heroService.create(Superheroes[index]);
            }
            this.initialSuperheroes = false;
        }

        this.superheroes = this.heroService.getAll();
    }

    // TODO: listen for an emit from charatcer card and route to detail/edit
}
