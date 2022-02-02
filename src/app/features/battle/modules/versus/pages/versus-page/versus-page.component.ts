import { Battle } from 'src/app/shared/battles/types/battle.interface';
import { Superhero } from './../../../../../characters/modules/superheroes/types/superhero.interface';
import { ActivatedRoute } from '@angular/router';
import { Character } from './../../../../../../shared/characters/types/character.interface';
import { Component, OnInit } from '@angular/core';
import { SuperheroService } from 'src/app/shared/superheroes/superhero.service';
import { VillainService } from 'src/app/shared/villains/villain.service';
import { BattleService } from 'src/app/shared/battles/battle.service';

@Component({
    selector: 'app-versus-page',
    templateUrl: './versus-page.component.html',
    styleUrls: ['./versus-page.component.css'],
})
export class VersusPageComponent implements OnInit {
    superhero: Character = {} as Character;
    villain: Character = {} as Character;
    battles!: Battle[];

    constructor(
        private readonly activatedRoute: ActivatedRoute,
        private readonly superheroService: SuperheroService,
        private readonly villainService: VillainService,
        private readonly battleService: BattleService
    ) {}

    ngOnInit(): void {
        this.superhero = this.superheroService.getById(this.activatedRoute.snapshot.paramMap.get('superheroid') as string);
        this.villain = this.villainService.getById(this.activatedRoute.snapshot.paramMap.get('villainid') as string);
        this.battleService.create({ superheroId: this.superhero.id, villainId: this.villain.id, winner: this.superhero.id } as Battle);
        this.battles = this.battleService.getAll();
        console.log(this.battles);
    }

    getRecord(characterId: string): { wins: number; losses: number } {
        let matches: number = 0;
        let wins: number = 0;

        for (let index = 0; index < this.battles.length; index++) {
            const element = this.battles[index];
            if (element.superheroId == characterId || element.villainId == characterId) {
                matches++;
                if (element.winner == characterId) {
                    wins++;
                }
            }
        }
        return { wins: wins, losses: matches - wins };
        // return this.battleService.getWinLossRecord(characterId);
    }
}
