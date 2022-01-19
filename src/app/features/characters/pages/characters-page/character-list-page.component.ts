import { Component } from '@angular/core';

@Component({
    selector: 'app-character-list-page',
    templateUrl: './character-list-page.component.html',
})
export class CharacterListPageComponent {
    title: string = 'MARVEL CHARACTERS:';

    // Auto-constructs an instance shared with app and passes it in
    constructor() {}
}
