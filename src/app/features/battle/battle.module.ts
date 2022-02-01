import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BattleRoutingModule } from './battle-routing.module';
import { BattlePageComponent } from './pages/battle-page/battle-page.component';

@NgModule({
    declarations: [BattlePageComponent],
    imports: [CommonModule, BattleRoutingModule],
})
export class BattleModule {}
