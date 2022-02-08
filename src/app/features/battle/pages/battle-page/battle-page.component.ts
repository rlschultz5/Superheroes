import { BattleService } from 'src/app/shared/battles/battle.service';
import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/shared/characters/types/character.interface';
import { SuperheroService } from 'src/app/shared/superheroes/superhero.service';
import { VillainService } from 'src/app/shared/villains/villain.service';
import { Battle } from 'src/app/shared/battles/types/battle.interface';

@Component({
    selector: 'app-battle-page',
    templateUrl: './battle-page.component.html',
    styleUrls: ['./battle-page.component.css'],
})
export class BattlePageComponent implements OnInit {
    superheroes: Character[] = [];
    villains: Character[] = [];
    chosenSuperhero: Character = {} as Character;
    chosenVillain: Character = {} as Character;

    superheroIsSelected: boolean = false;
    villainIsSelected: boolean = false;
    submitted: boolean = false;

    constructor(
        private readonly battleService: BattleService,
        private readonly superheroService: SuperheroService,
        private readonly villainService: VillainService
    ) {}

    ngOnInit(): void {
        this.superheroes = this.superheroService.getAll();
        this.villains = this.villainService.getAll();

        throw new Error('Method not implemented.');
    }
    selectedSuperhero(superhero: Character) {
        this.chosenSuperhero = superhero;
        this.superheroIsSelected = true;
    }
    selectedVillain(villain: Character) {
        this.chosenVillain = villain;
        this.villainIsSelected = true;
    }
    logFight() {
        const battle: Battle = this.battleService.create({
            superheroId: this.chosenSuperhero.id,
            superheroName: this.chosenSuperhero.name,
            villainId: this.chosenVillain.id,
            villainName: this.chosenVillain.name,
            winner: this.chosenSuperhero.id,
        } as Battle);
        this.chosenSuperhero.battles.push(battle);
        this.chosenVillain.battles.push(battle);
        this.superheroService.update(this.chosenSuperhero);
        this.villainService.update(this.chosenVillain);
    }
}
