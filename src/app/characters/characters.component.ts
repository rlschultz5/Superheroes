import { Component, OnInit } from '@angular/core';
import { Character } from '../models/character';
import { HeroService } from '../services/superheroes.service';

@Component({
    selector: 'app-characters',
    templateUrl: './characters.component.html',
})
export class CharactersComponent implements OnInit {
    title: string = 'List of Superheroes:';
    readonly characterColorMap = {
        blue: 'app-btn btn-blue',
        green: 'app-btn btn-green',
        red: 'app-btn btn-red',
        yellow: 'app-btn btn-yellow',
        white: 'app-btn btn-white',
        purple: 'app-btn btn-purple',
    };

    superheroes: Character[];
    villains: Character[];
    hiddenHero: boolean = true;

    // Auto-constructs an instance shared with app and passes it in
    constructor(
        private readonly service: HeroService,
        private readonly service2: HeroService
    ) {
        this.superheroes = service.getAll();
        this.villains = service2.getAll();
    }

    ngOnInit(): void {}
}
