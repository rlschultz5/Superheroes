import { Component, OnInit } from '@angular/core';
import { characterColorMap } from 'src/app/shared/models/characterColorMap';
import { Character } from '../../../shared/models/character';
import { HeroService } from '../../../shared/services/superheroes.service';

@Component({
    selector: 'app-characters-page',
    templateUrl: './characters-page.component.html',
})
export class CharactersPageComponent implements OnInit {
    title: string = 'List of Superheroes:';

    superheroes!: Character[];
    villains!: Character[];
    characterColorMap = characterColorMap;

    // Auto-constructs an instance shared with app and passes it in
    constructor(private readonly service: HeroService, private readonly service2: HeroService) {}

    ngOnInit(): void {
        this.superheroes = this.service.getAll();
        this.villains = this.service2.getAll();
    }
}
