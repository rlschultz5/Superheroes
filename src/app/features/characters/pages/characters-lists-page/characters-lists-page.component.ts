import { Component, OnInit } from '@angular/core';
import { CharacterColorMap } from 'src/app/shared/characters/configurations/character-color-map.config';
import { Character } from 'src/app/shared/characters/types/character.interface';
import { SuperheroService } from 'src/app/shared/superheroes/superhero.service';
import { VillainService } from 'src/app/shared/villains/villain.service';
import { CardButtonConfig } from '../../../../shared/characters/components/character-card/character-card.component';

@Component({
    selector: 'app-character-list-page',
    templateUrl: './characters-lists-page.component.html',
})
export class CharactersListsPageComponent implements OnInit {
    title: string = 'MARVEL CHARACTERS:';
    superheroes!: Character[];
    villains!: Character[];

    readonly characterColorMap = CharacterColorMap;

    constructor(private readonly superheroService: SuperheroService, private readonly villainService: VillainService) {}
    ngOnInit() {
        this.superheroes = this.superheroService.getAll();
        this.villains = this.villainService.getAll();
    }

    getRoute(prefix: string, id: string): CardButtonConfig[] {
        return [
            { label: 'Details', route: '/characters/' + prefix + '/' + id },
            { label: 'Edit', route: '/characters/' + prefix + '/edit/' + id },
        ];
    }
}
