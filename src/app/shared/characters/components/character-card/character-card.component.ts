import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CharacterColorMap } from '../../configurations/character-color-map.config';
import { Character } from '../../types/character.interface';

@Component({
    selector: 'app-character-card',
    templateUrl: './character-card.component.html',
    styleUrls: ['character-card.component.css'],
})
export class CharacterCardComponent {
    @Input() character!: Character;
    @Input() routeFrom!: string;
    @Input() buttons: CardButtonConfig[] = [];

    readonly characterColorMap = CharacterColorMap;
}
export interface CardButtonConfig {
    label: string;
    route: string;
}
