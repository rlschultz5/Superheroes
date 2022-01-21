import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CharactersSharedModule } from './../../shared/characters/characters-shared.module';
import { VillainService } from './../../shared/villains/villain.service';
import { CharactersRoutingModule } from './characters-routing.module';
import { CharacterListPageComponent } from './pages/characters-page/character-list-page.component';

@NgModule({
    declarations: [CharacterListPageComponent],
    exports: [CharacterListPageComponent],
    imports: [CommonModule, CharactersRoutingModule, CharactersSharedModule],
    providers: [VillainService],
})
export class CharactersModule {}
