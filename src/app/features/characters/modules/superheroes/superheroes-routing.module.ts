import { SuperheroesFormPageComponent } from './pages/superheroes-form-page/superheroes-form-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SuperheroesDetailPageComponent } from './pages/superheroes-detail-page/superheroes-detail-page.component';

const routes: Routes = [
    {
        path: 'create',
        component: SuperheroesFormPageComponent,
        // component: CharacterFormComponent,
        // resolve: { providers: CharacterServiceResolve },
        // data: {
        //     type: 'superhero',
        // },
    },
    {
        path: ':id',
        component: SuperheroesDetailPageComponent,

        // NOTE: \/ Using the resolve
        // component: CharacterDetailComponent,
        // // NOTE: Resolves also can load the info before the page loads so it doesn't load a blank page
        // resolve: { providers: CharacterServiceResolve },
        // data: {
        //     type: 'superhero',
        // },
    },
    {
        path: 'edit/:id',
        component: SuperheroesFormPageComponent,
        // component: CharacterFormComponent,
        // resolve: { providers: CharacterServiceResolve },
        // data: {
        //     type: 'superhero',
        // },
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class SuperheroesRoutingModule {}
