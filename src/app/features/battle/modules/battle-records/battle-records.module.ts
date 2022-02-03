import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BattleRecordsRoutingModule } from './battle-records-routing.module';
import { BattleRecordPageComponent } from './pages/battle-record-page/battle-record-page.component';

@NgModule({
    declarations: [BattleRecordPageComponent],
    exports: [],
    imports: [CommonModule, BattleRecordsRoutingModule],
    providers: [],
})
export class BattleRecordsModule {}
