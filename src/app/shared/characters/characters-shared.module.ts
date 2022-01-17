import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CharacterCardComponent } from './character-card/character-card.component';

@NgModule({
    declarations: [CharacterCardComponent],
    exports: [CharacterCardComponent],
    imports: [CommonModule, RouterModule],
})
export class CharactersSharedModule {}
