import { CharactersSharedModule } from '../../../../shared/characters/characters-shared.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SuperheroService } from '../../../../shared/superheroes/superhero.service';
import { RouterModule } from '@angular/router';
import { CharacterDetailComponent } from '../../../../shared/characters/components/character-detail/character-detail.component';
import { CharacterServiceResolve } from '../../../../shared/characters/resolves/character.resolve';
import { CharacterFormComponent } from '../../../../shared/characters/components/character-form/character-form.component';
import { SuperheroesComponent } from './superheroes.component';

@NgModule({
    declarations: [SuperheroesComponent],
    exports: [SuperheroesComponent],
    imports: [
        CommonModule,
        CharactersSharedModule,
        // TODO: forRoot??
        RouterModule.forRoot([
            {
                path: 'superheroes/:id/detail',
                component: CharacterDetailComponent,
                resolve: { providers: CharacterServiceResolve },
                data: {
                    type: 'superhero',
                },
            },
            {
                path: 'superheroes/:id/form',
                component: CharacterFormComponent,
                resolve: { providers: CharacterServiceResolve },
                data: {
                    type: 'superhero',
                },
            },
        ]),
    ],
    providers: [SuperheroService, CharacterServiceResolve],
})
export class SuperheroesModule {}
