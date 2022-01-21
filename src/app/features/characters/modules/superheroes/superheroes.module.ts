import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CharactersSharedModule } from 'src/app/shared/characters/characters-shared.module';
import { SuperheroesDetailPageComponent } from './pages/superheroes-detail-page/superheroes-detail-page.component';
import { SuperheroesFormPageComponent } from './pages/superheroes-form-page/superheroes-form-page.component';
import { SuperheroesRoutingModule } from './superheroes-routing.module';
import { SuperheroesComponent } from './superheroes.component';

@NgModule({
    declarations: [SuperheroesComponent, SuperheroesFormPageComponent, SuperheroesDetailPageComponent],
    exports: [SuperheroesComponent, SuperheroesFormPageComponent, SuperheroesDetailPageComponent],
    imports: [CommonModule, SuperheroesRoutingModule, CharactersSharedModule, ReactiveFormsModule],
    providers: [],
})
export class SuperheroesModule {}
