import { Battle } from 'src/app/shared/battles/types/battle.interface';
import { Injectable } from '@angular/core';
import { DataService } from '../data-access/data.service';

@Injectable({ providedIn: 'root' })
export class BattleService extends DataService<Battle> {
    constructor() {
        super('battleDataTMap');
    }
    // TODO: get working and call from versus page
    getWinLossRecord(characterId: string): { wins: number; losses: number } {
        let matches: number = 0;
        let wins: number = 0;

        for (const key in this.data) {
            const indexedItem = this.data.get(key);
            console.log(characterId);
            console.log(indexedItem?.superheroId);
            console.log(indexedItem?.villainId);
            console.log(indexedItem?.villainId);

            if (indexedItem?.superheroId === characterId || indexedItem?.villainId === characterId) {
                matches++;
                if (indexedItem.winner === characterId) {
                    wins++;
                }
            }
        }
        return { wins: wins, losses: matches - wins };
    }
}
