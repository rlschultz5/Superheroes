import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CharactersSharedModule } from './../../shared/characters/characters-shared.module';
import { VillainService } from './../../shared/villains/villain.service';
import { CharactersRoutingModule } from './characters-routing.module';
import { CharactersListsPageComponent } from './pages/characters-page/characters-lists-page.component';

@NgModule({
    declarations: [CharactersListsPageComponent],
    exports: [],
    imports: [CommonModule, CharactersRoutingModule, CharactersSharedModule],
    providers: [VillainService],
})
export class CharactersModule {}
