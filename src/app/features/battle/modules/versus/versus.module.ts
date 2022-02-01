import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VersusPageComponent } from './pages/versus-page/versus-page.component';
import { VersusRoutingModule } from './versus-routing.module';

@NgModule({
    declarations: [VersusPageComponent],
    exports: [],
    imports: [CommonModule, VersusRoutingModule],
    providers: [],
})
export class VersusModule {}
