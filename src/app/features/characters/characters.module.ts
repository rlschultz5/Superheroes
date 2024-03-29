import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CharactersSharedModule } from './../../shared/characters/characters-shared.module';
import { CharactersRoutingModule } from './characters-routing.module';
import { CharactersListsPageComponent } from './pages/characters-lists-page/characters-lists-page.component';

@NgModule({
    declarations: [CharactersListsPageComponent],
    exports: [],
    imports: [CommonModule, CharactersRoutingModule, CharactersSharedModule],
    providers: [],
})
export class CharactersModule {}
