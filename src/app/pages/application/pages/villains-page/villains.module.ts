import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CharacterDetailComponent } from 'src/app/pages/application/components/character-detail/character-detail.component';
import { CharacterFormComponent } from '../../components/character-form/character-form.component';
import { CharactersSharedModule } from '../../components/characters-shared.module';
import { CharacterServiceResolve } from '../../resolves/character.resolve';
import { VillainService } from '../../services/villain.service';
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
    providers: [VillainService],
})
export class VillainsModule {}
