import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../../pages/application/models/character';
import { characterColorMap } from '../../../pages/application/models/characterColorMap';

@Component({
    selector: 'app-character-card',
    templateUrl: './character-card.component.html',
})
export class CharacterCardComponent {
    @Input() character!: Character;

    @Output() buttonClicked = new EventEmitter<string>();

    readonly characterColorMap = characterColorMap;

    constructor() {}

    goToDetail() {
        this.buttonClicked.emit('detail');
    }

    goToForm() {
        this.buttonClicked.emit('form');
    }
}
