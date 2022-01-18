import { CharactersSharedModule } from '../../components/characters-shared.module';
import { SuperheroesPageComponent } from './../superheroes-page/superheroes-page.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SuperheroService } from '../../services/superhero.service';
import { RouterModule } from '@angular/router';
import { CharacterDetailComponent } from '../../components/character-detail/character-detail.component';
import { CharacterServiceResolve } from '../../resolves/character.resolve';
import { CharacterFormComponent } from '../../components/character-form/character-form.component';

@NgModule({
    declarations: [SuperheroesPageComponent],
    exports: [SuperheroesPageComponent],
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
                    type: 'hero',
                },
            },
            {
                path: 'superheroes/:id/form',
                component: CharacterFormComponent,
                resolve: { providers: CharacterServiceResolve },
                data: {
                    type: 'hero',
                },
            },
        ]),
    ],
    providers: [SuperheroService],
})
export class SuperheroesModule {}
