import { Character } from '../../types/character.interface';
import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-character-grid-display',
    templateUrl: './character-grid-display.component.html',
    styleUrls: ['./character-grid-display.component.css'],
})
export class CharacterGridDisplayComponent {
    @Input() title!: string;
    @Input() characters!: Character[];
    @Input() characterType!: string;

    constructor() {}
}
