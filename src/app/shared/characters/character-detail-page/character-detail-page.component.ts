import { Character } from '../../models/character';
import { DataService } from '../../services/superheroes.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { characterColorMap } from '../../models/characterColorMap';

@Component({
    selector: 'app-character-detail',
    templateUrl: './character-detail-page.component.html',
    styleUrls: ['./character-detail-page.component.css'],
})
export class CharacterDetailComponent implements OnInit {
    characterId!: string;
    character!: Character;
    characterColor!: string;
    characterService!: DataService<any>;

    readonly characterColorMap = characterColorMap;

    constructor(private readonly activatedRoute: ActivatedRoute) {}

    ngOnInit(): void {
        // Retrieve Id from URL
        this.characterId = this.activatedRoute.snapshot.paramMap.get('id') as string;
        // Use resolve to determine character type
        this.characterService = this.activatedRoute.snapshot.data['providers'].service;
        // Retrieve character
        this.character = this.characterService.getById(this.characterId);
        // Set character's custom color
        this.characterColor = characterColorMap[this.character!.color];
    }
}
