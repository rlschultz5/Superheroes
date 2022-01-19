import { CharactersRoutingModule } from './characters-routing.module';
import { NgModule } from '@angular/core';
import { CharacterListPageComponent } from './pages/characters-page/character-list-page.component';

@NgModule({
    declarations: [CharacterListPageComponent],
    exports: [CharacterListPageComponent],
    imports: [CharactersRoutingModule],
    providers: [],
})
export class CharactersModule {}
