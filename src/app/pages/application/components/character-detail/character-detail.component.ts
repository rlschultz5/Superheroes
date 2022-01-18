import { Character } from '../../models/character';
import { DataService } from '../../services/data.service';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { characterColorMap } from '../../models/characterColorMap';

@Component({
    selector: 'app-character-detail',
    templateUrl: './character-detail.component.html',
    styleUrls: ['./character-detail.component.css'],
})
export class CharacterDetailComponent {
    @Input()
    character!: Character;
    readonly characterColorMap = characterColorMap;

    // characterId!: string;
    // characterColor!: string;
    // characterService!: DataService<any>;

    constructor() {}

    // ngOnInit(): void {
    //     // Retrieve Id from URL
    //     this.characterId = this.activatedRoute.snapshot.paramMap.get('id') as string;
    //     // Use resolve to determine character type
    //     this.characterService = this.activatedRoute.snapshot.data['providers'].service;
    //     // Retrieve character
    //     this.character = this.characterService.getById(this.characterId);
    //     // Set character's custom color
    //     this.characterColor = characterColorMap[this.character!.color];
    // }
}
