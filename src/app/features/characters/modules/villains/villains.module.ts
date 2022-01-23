import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CharactersSharedModule } from '../../../../shared/characters/characters-shared.module';
import { VillainsDetailPageComponent } from './pages/villains-detail-page/villains-detail-page.component';
import { VillainsFormPageComponent } from './pages/villains-form-page/villains-form-page.component';
import { VillainsRoutingModule } from './villains-routing.module';

@NgModule({
    declarations: [VillainsDetailPageComponent, VillainsFormPageComponent],
    exports: [],
    imports: [CommonModule, CharactersSharedModule, VillainsRoutingModule, ReactiveFormsModule],
    providers: [],
})
export class VillainsModule {}
