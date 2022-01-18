import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../types/character.interface';
import { characterColorMap } from '../../configurations/character-color-map.config';

@Component({
    selector: 'app-character-card',
    templateUrl: './character-card.component.html',
})
export class CharacterCardComponent {
    @Input() character!: Character;

    @Output() buttonClicked = new EventEmitter<string>();

    readonly characterColorMap = characterColorMap;

    constructor() {}

    /**
     * sends page to route to back to parent page
     * @param page to route to based on button clicked
     */
    onClicked(page: string) {
        this.buttonClicked.emit(page);
    }
}
