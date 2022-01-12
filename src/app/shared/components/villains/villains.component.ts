import { Component, OnInit } from '@angular/core';
import { Character } from '../../models/character';
import {
    HeroService,
    VillainService,
} from '../../services/superheroes.service';
import { characterColorMap } from '../../models/characterColorMap';

@Component({
    selector: 'app-villains',
    templateUrl: './villains.component.html',
    styleUrls: ['./villains.component.css'],
})
export class VillainsComponent implements OnInit {
    title: string = 'List of Villains:';
    villains: Character[] = [];

    readonly characterColorMap = characterColorMap;

    // Auto-constructs an instance shared with app and passes it in
    constructor(private readonly villainService: VillainService) {}

    ngOnInit(): void {
        this.villains = this.villainService.getAll();
    }
}
