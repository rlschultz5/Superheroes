import { Component } from '@angular/core';

@Component({
    selector: 'app-characters-page',
    templateUrl: './characters-page.component.html',
})
export class CharactersPageComponent {
    title: string = 'MARVEL CHARACTERS:';

    // Auto-constructs an instance shared with app and passes it in
    constructor() {}
}
