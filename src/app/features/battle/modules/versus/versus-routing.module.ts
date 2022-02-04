import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VersusPageComponent } from './pages/versus-page/versus-page.component';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        component: VersusPageComponent,
    },
    { path: '**', redirectTo: '' },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class VersusRoutingModule {}
