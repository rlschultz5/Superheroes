import { Component, OnInit } from '@angular/core';
import { Character } from '../models/character';
import { HeroService, VillainService } from '../services/superheroes.service';

@Component({
    selector: 'app-villains',
    templateUrl: './villains.component.html',
    styleUrls: ['./villains.component.css'],
})
export class VillainsComponent implements OnInit {
    title: string = 'List of Villains:';
    villains: Character[] = [];
    hiddenHero: boolean = true;

    readonly characterColorMap = {
        blue: 'app-btn btn-blue',
        green: 'app-btn btn-green',
        red: 'app-btn btn-red',
        yellow: 'app-btn btn-yellow',
        white: 'app-btn btn-white',
        purple: 'app-btn btn-purple',
    };

    // Auto-constructs an instance shared with app and passes it in
    constructor(private readonly villainService: VillainService) {}

    ngOnInit(): void {
        this.villains = this.villainService.getAll();
    }
}
