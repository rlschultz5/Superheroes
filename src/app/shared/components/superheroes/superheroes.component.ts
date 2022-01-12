import { Superheroes } from '../../models/default-superheroes';
import { Character } from '../../models/character';
import { Component, OnInit } from '@angular/core';
import { HeroService } from '../../services/superheroes.service';
import { characterColorMap } from '../../models/characterColorMap';

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

    ngOnInit(): void {
        if (this.heroService.isEmpty()) {
            for (let index = 0; index < Superheroes.length; index++) {
                this.heroService.create(Superheroes[index]);
                console.log(this.initialSuperheroes);
            }
            this.initialSuperheroes = false;
            console.log(this.initialSuperheroes);
        }

        this.superheroes = this.heroService.getAll();
    }
}
