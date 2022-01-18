import { NgModule } from '@angular/core';
import { SuperheroesModule } from '../superheroes/module/superheroes.module';
import { VillainsModule } from '../villains/module/villains.module';
import { CharacterListPageComponent } from './pages/characters-page/character-list-page.component';

@NgModule({
    declarations: [CharacterListPageComponent],
    exports: [CharacterListPageComponent],
    imports: [SuperheroesModule, VillainsModule],
    providers: [],
})
export class CharactersModule {}
