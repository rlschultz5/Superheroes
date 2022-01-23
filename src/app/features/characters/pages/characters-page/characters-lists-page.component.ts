import { CardButtonConfig } from '../../../../shared/characters/components/character-card/character-card.component';
import { Component, OnInit } from '@angular/core';
import { characterColorMap } from 'src/app/shared/characters/configurations/character-color-map.config';
import { Character } from 'src/app/shared/characters/types/character.interface';
import { SuperheroService } from 'src/app/shared/superheroes/superhero.service';
import { VillainService } from 'src/app/shared/villains/villain.service';
import { defaultSuperheroes } from '../../modules/superheroes/configurations/default-superheroes.config';
import { defaultVillains } from '../../modules/villains/configurations/default-villains.config';

@Component({
    selector: 'app-character-list-page',
    templateUrl: './characters-lists-page.component.html',
    styleUrls: ['./characters-lists-page.component.css'],
})
export class CharactersListsPageComponent implements OnInit {
    title: string = 'MARVEL CHARACTERS:';
    superheroes!: Character[];
    initialSuperheroes: boolean = true;

    villains!: Character[];
    initialVillains: boolean = true;

    readonly characterColorMap = characterColorMap;

    constructor(private readonly superheroService: SuperheroService, private readonly villainService: VillainService) {}
    ngOnInit(): void {
        // CREATES DEFAULT SUPERHEROES FOR SITE IF SITE HAS NEVER BEEN LAUNCHED
        if (this.superheroService.isEmpty()) {
            // NOTE: Put this in assets or app.html
            for (let index = 0; index < defaultSuperheroes.length; index++) {
                this.superheroService.create(defaultSuperheroes[index]);
            }
            this.initialSuperheroes = false;
        }
        this.superheroes = this.superheroService.getAll();
        // CREATES DEFAULT VILLAINS FOR SITE IF SITE HAS NEVER BEEN LAUNCHED
        if (this.villainService.isEmpty()) {
            for (let index = 0; index < defaultVillains.length; index++) {
                this.villainService.create(defaultVillains[index]);
            }
            this.initialVillains = false;
        }
        this.villains = this.villainService.getAll();
    }

    getRoute(prefix: string, id: string): CardButtonConfig[] {
        return [
            { label: 'Details', route: '/characters/' + prefix + '/' + id },
            { label: 'Edit', route: '/characters/' + prefix + '/edit/' + id },
        ];
    }
}
