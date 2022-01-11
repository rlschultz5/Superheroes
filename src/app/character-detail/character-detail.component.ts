import { Character } from './../models/character';
import {
    DataService,
    HeroService,
    VillainService,
} from './../services/superheroes.service';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { characterColorMap } from '../models/characterColorMap';

@Component({
    selector: 'app-character-detail',
    templateUrl: './character-detail.component.html',
    styleUrls: ['./character-detail.component.css'],
})
export class CharacterDetailComponent implements OnInit {
    characterId!: string;
    character!: Character;
    charColor!: string;
    characterService!: DataService<any>;

    readonly characterColors = characterColorMap;

    constructor(
        private readonly route: ActivatedRoute,
        private readonly heroService: HeroService,
        private readonly villainService: VillainService
    ) {}

    ngOnInit(): void {
        const param = this.route.snapshot.paramMap.get('id');
        if (param) {
            this.characterId = param;
        }
        if (this.heroService.getById(this.characterId) !== undefined) {
            this.character = this.heroService.getById(this.characterId);
            console.log(this.character?.name);
        } else {
            this.character = this.villainService.getById(this.characterId);
        }
        this.charColor = characterColorMap[this.character!.color];
    }
}
