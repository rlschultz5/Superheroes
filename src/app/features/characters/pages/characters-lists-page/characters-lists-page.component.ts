import { CardButtonConfig } from '../../../../shared/characters/components/character-card/character-card.component';
import { Component, OnInit } from '@angular/core';
import { CharacterColorMap } from 'src/app/shared/characters/configurations/character-color-map.config';
import { Character } from 'src/app/shared/characters/types/character.interface';
import { SuperheroService } from 'src/app/shared/superheroes/superhero.service';
import { VillainService } from 'src/app/shared/villains/villain.service';
import { DefaultSuperheroes } from '../../modules/superheroes/configurations/default-superheroes.config';
import { DefaultVillains } from '../../modules/villains/configurations/default-villains.config';

@Component({
    selector: 'app-character-list-page',
    templateUrl: './characters-lists-page.component.html',
})
export class CharactersListsPageComponent implements OnInit {
    title: string = 'MARVEL CHARACTERS:';
    superheroes!: Character[];
    initialSuperheroes: boolean = true;

    villains!: Character[];
    initialVillains: boolean = true;

    readonly characterColorMap = CharacterColorMap;

    constructor(private readonly superheroService: SuperheroService, private readonly villainService: VillainService) {}
    ngOnInit() {
        // CREATES DEFAULT SUPERHEROES FOR SITE IF SITE HAS NEVER BEEN LAUNCHED
        if (this.superheroService.isEmpty()) {
            // NOTE: Put this in assets or app.html
            for (let index = 0; index < DefaultSuperheroes.length; index++) {
                this.superheroService.create(DefaultSuperheroes[index]);
            }
            this.initialSuperheroes = false;
        }
        this.superheroes = this.superheroService.getAll();
        // CREATES DEFAULT VILLAINS FOR SITE IF SITE HAS NEVER BEEN LAUNCHED
        if (this.villainService.isEmpty()) {
            for (let index = 0; index < DefaultVillains.length; index++) {
                this.villainService.create(DefaultVillains[index]);
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
