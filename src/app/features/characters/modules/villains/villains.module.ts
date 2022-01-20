import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CharactersSharedModule } from '../../../../shared/characters/characters-shared.module';
import { CharacterServiceResolve } from '../../../../shared/characters/resolves/character.resolve';
import { VillainService } from '../../../../shared/villains/villain.service';
import { VillainsPageComponent } from './villains-page.component';
import { VillainsRoutingModule } from './villains-routing.module';
import { VillainsDetailPageComponent } from './pages/villains-detail-page/villains-detail-page.component';
import { VillainsFormPageComponent } from './pages/villains-form-page/villains-form-page.component';

@NgModule({
    declarations: [VillainsPageComponent, VillainsDetailPageComponent, VillainsFormPageComponent],
    exports: [VillainsPageComponent, VillainsDetailPageComponent, VillainsFormPageComponent],
    imports: [CommonModule, CharactersSharedModule, VillainsRoutingModule, ReactiveFormsModule],
    providers: [VillainService, CharacterServiceResolve],
})
export class VillainsModule {}
