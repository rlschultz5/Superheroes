import { ActivatedRoute } from '@angular/router';
import { Character } from '../../models/character';
import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { characterColorMap } from '../../models/characterColorMap';
import { DataService } from '../../services/data.service';
import { Location } from '@angular/common';

@Component({
    selector: 'app-character-detail',
    templateUrl: './character-detail.component.html',
    styleUrls: ['./character-detail.component.css'],
})
export class CharacterDetailComponent implements OnInit {
    @Input() character!: Character;
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
