import { Injectable } from '@angular/core';
import { CharacterEditComponent } from './../character-edit/character-edit.component';
import { CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CharacterEditGuard
    implements CanDeactivate<CharacterEditComponent>
{
    canDeactivate(
        component: CharacterEditComponent
    ): Observable<boolean> | Promise<boolean> | boolean {
        if (component.characterForm.dirty) {
            const productName =
                component.characterForm.get('characterName')?.value ||
                'New Character';
            return confirm(
                'Navigate away and lose all changes to ${characterName}?'
            );
        }
        return true;
    }
}
