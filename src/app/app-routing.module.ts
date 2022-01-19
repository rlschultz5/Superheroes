import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    // NOTE: returns a promise and ".then" is giving contents of the file => returns Homepagemodule
    { path: 'home', loadChildren: () => import('./features/home/home.module').then((m) => m.HomePageModule) },
    {
        path: 'characters',
        loadChildren: () => import('./features/characters/characters.module').then((m) => m.CharactersModule),
    },
    // NOTE: '' can be at the bottom, or if it's at the top it needs to use " pathMatch: 'full' " tag
    { path: '', redirectTo: 'home' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
