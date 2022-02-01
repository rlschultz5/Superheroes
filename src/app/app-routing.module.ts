import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    // NOTE: returns a promise and ".then" is giving contents of the file => returns Homepagemodule
    { path: 'home', loadChildren: () => import('./features/home/home.module').then((m) => m.HomePageModule) },
    {
        path: 'characters',
        loadChildren: () => import('./features/characters/characters.module').then((m) => m.CharactersModule),
    },
    {
        path: 'battle',
        loadChildren: () => import('./features/battle/battle.module').then((m) => m.BattleModule),
    },
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    { path: '**', redirectTo: '/home' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
