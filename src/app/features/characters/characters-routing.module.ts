import { CharactersListsPageComponent } from './pages/characters-page/characters-lists-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    // NOTE: pathmatch: full => if it's characters/(nothing else)
    { path: '', pathMatch: 'full', component: CharactersListsPageComponent },
    {
        path: 'superheroes',
        loadChildren: () => import('./modules/superheroes/superheroes.module').then((m) => m.SuperheroesModule),
    },
    {
        path: 'villains',
        loadChildren: () => import('./modules/villains/villains.module').then((m) => m.VillainsModule),
    },
    // NOTE: if it's characters/(anything else)
    { path: '**', redirectTo: '/characters' },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class CharactersRoutingModule {}
