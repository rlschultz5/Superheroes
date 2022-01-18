import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CharacterDetailComponent } from 'src/app/shared/characters/components/character-detail/character-detail.component';
import { CharacterFormComponent } from '../../../../shared/characters/components/character-form/character-form.component';
import { CharactersSharedModule } from '../../../../shared/characters/characters-shared.module';
import { CharacterServiceResolve } from '../../../../shared/characters/resolves/character.resolve';
import { VillainService } from '../../../../shared/villains/villain.service';
import { VillainsPageComponent } from './villains-page.component';

@NgModule({
    declarations: [VillainsPageComponent],
    exports: [VillainsPageComponent],
    imports: [
        CommonModule,
        CharactersSharedModule,
        RouterModule.forRoot([
            {
                path: 'villains/:id/detail',
                component: CharacterDetailComponent,
                resolve: { providers: CharacterServiceResolve },
                data: {
                    type: 'villain',
                },
            },
            {
                path: 'villains/:id/form',
                component: CharacterFormComponent,
                resolve: { providers: CharacterServiceResolve },
                data: {
                    type: 'villain',
                },
            },
        ]),
    ],
    providers: [VillainService, CharacterServiceResolve],
})
export class VillainsModule {}
