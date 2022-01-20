import { CharacterGridDisplayComponent } from './components/character-grid-display/character-grid-display.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CharacterCardComponent } from './components/character-card/character-card.component';
import { CharacterDetailComponent } from './components/character-detail/character-detail.component';
import { CharacterFormComponent } from './components/character-form/character-form.component';

@NgModule({
    declarations: [
        CharacterCardComponent,
        CharacterDetailComponent,
        CharacterFormComponent,
        CharacterGridDisplayComponent,
    ],
    exports: [CharacterCardComponent, CharacterDetailComponent, CharacterFormComponent, CharacterGridDisplayComponent],
    imports: [CommonModule, ReactiveFormsModule, RouterModule],
})
export class CharactersSharedModule {}
