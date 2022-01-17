import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';
import { CharacterEditPageComponent } from './characters/character-edit-page/character-edit-page.component';

@Injectable({ providedIn: 'root' })
export class CharacterEditGuard implements CanDeactivate<CharacterEditPageComponent> {
    canDeactivate(component: CharacterEditPageComponent): Observable<boolean> | Promise<boolean> | boolean {
        if (component.characterForm.dirty) {
            const productName = component.characterForm.get('characterName')?.value || 'New Character';
            return confirm('Navigate away and lose all changes to ${characterName}?');
        }
        return true;
    }
}
