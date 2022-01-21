import { Component, EventEmitter, Input, Output } from '@angular/core';
import { characterColorMap } from '../../configurations/character-color-map.config';
import { Character } from '../../types/character.interface';

@Component({
    selector: 'app-character-card',
    templateUrl: './character-card.component.html',
})
export class CharacterCardComponent {
    @Input() character!: Character;
    @Input() routeFrom!: string;
    @Input() buttons: CardButtonConfig[] = [];

    @Output() buttonClicked = new EventEmitter<string>();

    readonly characterColorMap = characterColorMap;
}
export interface CardButtonConfig {
    label: string;
    route: string[];
}
