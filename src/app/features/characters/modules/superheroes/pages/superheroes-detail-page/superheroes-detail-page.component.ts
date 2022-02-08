import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharacterColorMap } from 'src/app/shared/characters/configurations/character-color-map.config';
import { Character } from 'src/app/shared/characters/types/character.interface';
import { SuperheroService } from './../../../../../../shared/superheroes/superhero.service';

@Component({
    selector: 'app-superheroes-detail-page',
    templateUrl: './superheroes-detail-page.component.html',
})
export class SuperheroesDetailPageComponent implements OnInit {
    character!: Character;
    readonly characterColorMap = CharacterColorMap;

    characterId!: string;
    characterColor!: string;
    buttonClass!: string;

    constructor(private readonly activatedRoute: ActivatedRoute, private readonly superheroService: SuperheroService) {}

    ngOnInit() {
        this.characterId = this.activatedRoute.snapshot.paramMap.get('id') as string;
        // this.characterService = this.activatedRoute.snapshot.data['providers'].service;
        this.character = this.superheroService.getById(this.characterId);
        this.characterColor = CharacterColorMap[this.character!.color];
        this.buttonClass = 'app-border-slate ' + CharacterColorMap[this.character!.color] + '-hover';
    }
}
