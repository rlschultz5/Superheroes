import { Router, ActivatedRoute } from '@angular/router';
import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Character } from '../../types/character.interface';
import { characterColorMap } from '../../configurations/character-color-map.config';
import { DataService } from 'src/app/shared/data-access/data.service';

@Component({
    selector: 'app-character-detail',
    templateUrl: './character-detail.component.html',
    styleUrls: ['./character-detail.component.css'],
})
export class CharacterDetailComponent implements OnInit {
    character!: Character;
    @Output() buttonClicked = new EventEmitter<string>();
    readonly characterColorMap = characterColorMap;

    characterId!: string;
    characterService!: DataService<any>;
    characterColor!: string;
    buttonClass!: string;

    constructor(private readonly location: Location, private readonly activatedRoute: ActivatedRoute) {}

    ngOnInit(): void {
        // Retrieve Id from URL
        this.characterId = this.activatedRoute.snapshot.paramMap.get('id') as string;
        // Use resolve to determine character type
        this.characterService = this.activatedRoute.snapshot.data['providers'].service;
        // Retrieve character
        this.character = this.characterService.getById(this.characterId);
        // Set character's custom color
        this.characterColor = characterColorMap[this.character!.color];
        this.buttonClass = 'basic-button border ' + characterColorMap[this.character!.color] + '-hover';
    }

    backClicked() {
        // TODO: Change
        this.location.back();
    }
}
