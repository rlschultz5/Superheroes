import { Character } from './../models/character';
import { HeroService, VillainService } from './../services/superheroes.service';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-character-detail',
    templateUrl: './character-detail.component.html',
    styleUrls: ['./character-detail.component.css'],
})
export class CharacterDetailComponent implements OnInit {
    @Input() characterId!: string;
    character!: Character;

    readonly characterColorMap = {
        blue: 'app-btn detail-blue',
        green: 'app-btn detail-green',
        red: 'app-btn detail-red',
        yellow: 'app-btn detail-yellow',
        white: 'app-btn detail-white',
        purple: 'app-btn detail-purple',
    };

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
    }
}
