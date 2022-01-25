import { SuperheroService } from './../../../../../../shared/superheroes/superhero.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharacterColorMap } from 'src/app/shared/characters/configurations/character-color-map.config';
import { Character } from 'src/app/shared/characters/types/character.interface';

@Component({
    selector: 'app-superheroes-detail-page',
    templateUrl: './superheroes-detail-page.component.html',
    styleUrls: ['./superheroes-detail-page.component.css'],
})
export class SuperheroesDetailPageComponent implements OnInit {
    character!: Character;
    // @Output() buttonClicked = new EventEmitter<string>();
    readonly characterColorMap = CharacterColorMap;

    characterId!: string;
    characterColor!: string;
    buttonClass!: string;

    constructor(private readonly activatedRoute: ActivatedRoute, private readonly superheroService: SuperheroService) {}

    ngOnInit() {
        // Retrieve Id from URL
        this.characterId = this.activatedRoute.snapshot.paramMap.get('id') as string;
        // Use resolve to determine character type
        // this.characterService = this.activatedRoute.snapshot.data['providers'].service;
        // Retrieve character
        this.character = this.superheroService.getById(this.characterId);
        // Set character's custom color
        this.characterColor = CharacterColorMap[this.character!.color];
        this.buttonClass = 'basic-button border ' + CharacterColorMap[this.character!.color] + '-hover';
    }
}
