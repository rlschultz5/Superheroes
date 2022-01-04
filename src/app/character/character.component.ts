import { HeroService } from '../services/superheroes.service';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Character } from '../models/character';

@Component({
    selector: 'app-character',
    templateUrl: './character.component.html',
    styleUrls: ['./character.component.css'],
})
export class CharacterComponent implements OnInit {
    hero?: Character;
    heroId?: string;

    constructor(
        private readonly route: ActivatedRoute,
        private readonly heroService: HeroService
    ) {}

    ngOnInit(): void {
        this.heroId = this.route.snapshot.paramMap.get('id') as string;
        console.log(this.heroId);
        this.hero = this.heroService.getById(this.heroId);
    }
}
