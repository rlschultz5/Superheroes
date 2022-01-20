import { CharacterListPageComponent } from './pages/characters-page/character-list-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    // NOTE: if it's characters/NOTHINGELSE => pathmatch: full
    { path: '', pathMatch: 'full', component: CharacterListPageComponent },
    {
        path: 'superheroes',
        loadChildren: () => import('./modules/superheroes/superheroes.module').then((m) => m.SuperheroesModule),
    },
    {
        path: 'villains',
        loadChildren: () => import('./modules/villains/villains.module').then((m) => m.VillainsModule),
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class CharactersRoutingModule {}
