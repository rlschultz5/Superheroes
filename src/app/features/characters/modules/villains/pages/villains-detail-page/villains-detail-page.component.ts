import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { characterColorMap } from 'src/app/shared/characters/configurations/character-color-map.config';
import { Character } from 'src/app/shared/characters/types/character.interface';
import { VillainService } from 'src/app/shared/villains/villain.service';

@Component({
    selector: 'app-villains-detail-page',
    templateUrl: './villains-detail-page.component.html',
    styleUrls: ['./villains-detail-page.component.css'],
})
export class VillainsDetailPageComponent implements OnInit {
    character!: Character;
    readonly characterColorMap = characterColorMap;

    characterId!: string;
    characterColor!: string;
    buttonClass!: string;

    constructor(private readonly activatedRoute: ActivatedRoute, private readonly villainService: VillainService) {}

    ngOnInit(): void {
        // Retrieve Id from URL
        this.characterId = this.activatedRoute.snapshot.paramMap.get('id') as string;
        // Use resolve to determine character type
        // this.characterService = this.activatedRoute.snapshot.data['providers'].service;
        // Retrieve character
        this.character = this.villainService.getById(this.characterId);
        // Set character's custom color
        this.characterColor = characterColorMap[this.character!.color];
        this.buttonClass = 'basic-button border ' + characterColorMap[this.character!.color] + '-hover';
    }
}
