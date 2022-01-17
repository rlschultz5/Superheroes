import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Character } from '../../models/character';
import { characterColorMap } from '../../models/characterColorMap';
import { DataService } from '../../services/superheroes.service';

@Component({
    selector: 'app-character-card',
    templateUrl: './character-card.component.html',
})
export class CharacterCardComponent implements OnInit {
    characterId!: string;
    character!: Character;

    characterService!: DataService<any>;

    readonly characterColorMap = characterColorMap;
    constructor(private readonly activatedRoute: ActivatedRoute) {}

    ngOnInit(): void {
        this.characterId = this.activatedRoute.snapshot.paramMap.get('id') as string;
        this.characterService = this.activatedRoute.snapshot.data['providers'].service;
        this.character = this.characterService.getById(this.characterId);
    }
}
