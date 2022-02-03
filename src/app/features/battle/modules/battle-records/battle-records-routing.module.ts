import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BattleRecordPageComponent } from './pages/battle-record-page/battle-record-page.component';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        component: BattleRecordPageComponent,
    },
    { path: '**', redirectTo: '' },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class BattleRecordsRoutingModule {}
