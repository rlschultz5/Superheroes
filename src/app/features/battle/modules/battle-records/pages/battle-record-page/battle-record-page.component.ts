import { BattleService } from 'src/app/shared/battles/battle.service';
import { Component, OnInit } from '@angular/core';
import { Battle } from 'src/app/shared/battles/types/battle.interface';

@Component({
    selector: 'app-battle-record-page',
    templateUrl: './battle-record-page.component.html',
    styleUrls: ['./battle-record-page.component.css'],
})
export class BattleRecordPageComponent implements OnInit {
    battles: Battle[] = [];

    constructor(private readonly battleService: BattleService) {}

    ngOnInit(): void {
        this.battles = this.battleService.getAll();
    }
}
