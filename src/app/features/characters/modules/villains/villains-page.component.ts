import { Component, OnInit } from '@angular/core';
import { Character } from '../../../../shared/characters/types/character.interface';
import { characterColorMap } from '../../../../shared/characters/configurations/character-color-map.config';
import { defaultVillains } from './configurations/default-villains.config';
import { VillainService } from '../../../../shared/villains/villain.service';

@Component({
    selector: 'app-villains',
    templateUrl: './villains-page.component.html',
})
export class VillainsPageComponent implements OnInit {
    title: string = 'List of Villains:';
    villains?: Character[] = [];
    initialVillains: boolean = true;

    readonly characterColorMap = characterColorMap;

    // Auto-constructs an instance shared with app and passes it in
    constructor(private readonly villainService: VillainService) {}

    ngOnInit() {
        if (this.villainService.isEmpty()) {
            for (let index = 0; index < defaultVillains.length; index++) {
                this.villainService.create(defaultVillains[index]);
                console.log(this.initialVillains);
            }
            this.initialVillains = false;
            console.log(this.initialVillains);
        }

        this.villains = this.villainService.getAll();
    }

    // TODO: listen for an emit from character card and route to detail/form
}
