import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';
import { CharacterFormComponent } from './characters/character-form/character-form.component';

@Injectable({ providedIn: 'root' })
export class CharacterEditGuard implements CanDeactivate<CharacterFormComponent> {
    canDeactivate(component: CharacterFormComponent): Observable<boolean> | Promise<boolean> | boolean {
        if (component.characterForm.dirty) {
            const productName = component.characterForm.get('characterName')?.value || 'New Character';
            return confirm('Navigate away and lose all changes to ${characterName}?');
        }
        return true;
    }
}
