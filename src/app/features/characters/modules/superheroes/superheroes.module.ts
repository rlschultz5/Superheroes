import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { CharactersSharedModule } from 'src/app/shared/characters/characters-shared.module';
import { NgModule } from '@angular/core';
import { CharacterServiceResolve } from '../../../../shared/characters/resolves/character.resolve';
import { SuperheroService } from '../../../../shared/superheroes/superhero.service';
import { SuperheroesRoutingModule } from './superheroes-routing.module';
import { SuperheroesComponent } from './superheroes.component';
import { SuperheroesFormPageComponent } from './pages/superheroes-form-page/superheroes-form-page.component';
import { SuperheroesDetailPageComponent } from './pages/superheroes-detail-page/superheroes-detail-page.component';

@NgModule({
    declarations: [SuperheroesComponent, SuperheroesFormPageComponent, SuperheroesDetailPageComponent],
    exports: [SuperheroesComponent, SuperheroesFormPageComponent, SuperheroesDetailPageComponent],
    imports: [CommonModule, SuperheroesRoutingModule, CharactersSharedModule, ReactiveFormsModule],
    providers: [SuperheroService, CharacterServiceResolve],
})
export class SuperheroesModule {}
