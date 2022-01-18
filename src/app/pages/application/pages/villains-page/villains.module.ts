import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { VillainService } from '../../services/villain.service';
import { VillainsPageComponent } from './villains-page.component';

@NgModule({
    declarations: [],
    exports: [],
    imports: [CommonModule],
    providers: [VillainService],
})
export class VillainsModule {}
