import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CharacterCardComponent } from './character-card/character-card.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CharacterDetailComponent } from './character-detail/character-detail.component';
import { CharacterFormComponent } from './character-form/character-form.component';

@NgModule({
    declarations: [CharacterCardComponent, CharacterDetailComponent, CharacterFormComponent],
    exports: [CharacterCardComponent, CharacterDetailComponent, CharacterFormComponent],
    imports: [CommonModule, RouterModule, ReactiveFormsModule],
})
export class CharactersSharedModule {}
