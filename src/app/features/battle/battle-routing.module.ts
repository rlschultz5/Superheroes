import { BattlePageComponent } from './pages/battle-page/battle-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: '', pathMatch: 'full', component: BattlePageComponent },
    {
        path: 'versus',
        loadChildren: () => import('./modules/versus/versus.module').then((m) => m.VersusModule),
    },
    { path: '**', redirectTo: '/battle' },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class BattleRoutingModule {}
