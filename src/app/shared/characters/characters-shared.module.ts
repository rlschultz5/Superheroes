import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CharacterCardComponent } from './components/character-card/character-card.component';

@NgModule({
    declarations: [CharacterCardComponent],
    exports: [CharacterCardComponent],
    imports: [CommonModule, ReactiveFormsModule, RouterModule],
})
export class CharactersSharedModule {}
