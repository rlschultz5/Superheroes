import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterDetailComponent } from 'src/app/shared/characters/components/character-detail/character-detail.component';
import { CharacterFormComponent } from 'src/app/shared/characters/components/character-form/character-form.component';
import { CharacterServiceResolve } from 'src/app/shared/characters/resolves/character.resolve';
import { VillainsDetailPageComponent } from './pages/villains-detail-page/villains-detail-page.component';
import { VillainsFormPageComponent } from './pages/villains-form-page/villains-form-page.component';

const routes: Routes = [
    {
        path: 'create',
        component: VillainsFormPageComponent,
        // component: CharacterFormComponent,
        // resolve: { providers: CharacterServiceResolve },
        // data: {
        //     type: 'villain',
        // },
    },
    {
        path: ':id',
        component: VillainsDetailPageComponent,
        // component: CharacterDetailComponent,
        // // NOTE: Resolves also can load the info before the page loads so it doesn't load a blank page
        // resolve: { providers: CharacterServiceResolve },
        // data: {
        //     type: 'villain',
        // },
    },
    {
        path: 'edit/:id',
        component: VillainsFormPageComponent,
        // component: CharacterFormComponent,
        // resolve: { providers: CharacterServiceResolve },
        // data: {
        //     type: 'villain',
        // },
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class VillainsRoutingModule {}
