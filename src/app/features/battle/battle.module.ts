import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BattleRoutingModule } from './battle-routing.module';
import { BattleHomePageComponent } from './pages/battle-home-page/battle-home-page.component';

@NgModule({
    declarations: [BattleHomePageComponent],
    imports: [CommonModule, BattleRoutingModule],
})
export class BattleModule {}
