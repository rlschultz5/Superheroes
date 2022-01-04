import { Superheroes } from './../models/default-superheroes';
import { Character } from '../models/character';
import { Component, OnInit } from '@angular/core';
import { HeroService } from '../services/superheroes.service';

@Component({
    selector: 'app-superheroes',
    templateUrl: './superheroes.component.html',
})
export class SuperheroesComponent implements OnInit {
    title: string = 'List of Superheroes:';
    superheroes?: Character[];
    hiddenHero: boolean = true;
    initialSuperheroes: boolean = true;

    readonly characterColorMap = {
        blue: 'app-btn btn-blue',
        green: 'app-btn btn-green',
        red: 'app-btn btn-red',
        yellow: 'app-btn btn-yellow',
        white: 'app-btn btn-white',
        purple: 'app-btn btn-purple',
    };

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
