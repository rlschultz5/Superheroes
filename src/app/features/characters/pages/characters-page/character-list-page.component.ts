import { Component, OnInit } from '@angular/core';
import { characterColorMap } from 'src/app/shared/characters/configurations/character-color-map.config';
import { Character } from 'src/app/shared/characters/types/character.interface';
import { SuperheroService } from 'src/app/shared/superheroes/superhero.service';
import { VillainService } from 'src/app/shared/villains/villain.service';
import { defaultSuperheroes } from '../../modules/superheroes/configurations/default-superheroes.config';
import { defaultVillains } from '../../modules/villains/configurations/default-villains.config';

@Component({
    selector: 'app-character-list-page',
    templateUrl: './character-list-page.component.html',
    styleUrls: ['./character-list-page.component.css'],
})
export class CharacterListPageComponent implements OnInit {
    title: string = 'MARVEL CHARACTERS:';
    routeFromSuperheroes: string = '/characters/superheroes';
    superheroes!: Character[];
    initialSuperheroes: boolean = true;

    routeFromVillains: string = '/characters/villains';
    villains!: Character[];
    initialVillains: boolean = true;

    readonly characterColorMap = characterColorMap;

    // Auto-constructs an instance shared with app and passes it in
    constructor(private readonly superheroService: SuperheroService, private readonly villainService: VillainService) {}
    ngOnInit(): void {
        if (this.superheroService.isEmpty()) {
            // NOTE: Put this in assets or app.html
            for (let index = 0; index < defaultSuperheroes.length; index++) {
                this.superheroService.create(defaultSuperheroes[index]);
            }
            this.initialSuperheroes = false;
        }

        this.superheroes = this.superheroService.getAll();

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
}
