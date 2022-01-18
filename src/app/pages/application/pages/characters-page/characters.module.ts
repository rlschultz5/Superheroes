import { NgModule } from '@angular/core';
import { SuperheroesPageComponent } from '../superheroes-page/superheroes-page.component';
import { SuperheroesModule } from '../superheroes-page/superheroes.module';
import { VillainsModule } from '../villains-page/villains.module';
import { CharactersPageComponent } from './characters-page.component';

@NgModule({
    declarations: [CharactersPageComponent],
    exports: [CharactersPageComponent],
    imports: [SuperheroesModule, VillainsModule],
    providers: [],
})
export class CharactersModule {}
