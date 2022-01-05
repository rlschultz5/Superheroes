import { CharacterEditComponent } from './character-edit/character-edit.component';
import { NgDompurifySanitizer } from '@tinkoff/ng-dompurify';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
    TuiRootModule,
    TuiDialogModule,
    TuiNotificationsModule,
    TUI_SANITIZER,
} from '@taiga-ui/core';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeroService, VillainService } from './services/superheroes.service';
import { HomepageComponent } from './homepage/homepage.component';
import { SuperheroesComponent } from './superheroes/superheroes.component';
import { UpdateSuperheroComponent } from './update-superhero/update-superhero.component';
import { CharactersComponent } from './characters/characters.component';
import { VillainsComponent } from './villains/villains.component';
import { CharacterDetailComponent } from './character-detail/character-detail.component';

@NgModule({
    declarations: [
        AppComponent,
        SuperheroesComponent,
        HomepageComponent,
        UpdateSuperheroComponent,
        CharacterEditComponent,
        CharactersComponent,
        VillainsComponent,
        CharacterDetailComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule.forRoot([
            { path: 'superheroes', component: SuperheroesComponent },
            { path: 'homepage', component: HomepageComponent },
            { path: 'characters', component: CharactersComponent },
            {
                path: 'characters/:id/edit',
                component: CharacterEditComponent,
            },
            {
                path: 'characters/:id/detail',
                component: CharacterEditComponent,
            },
            { path: '', component: HomepageComponent },
        ]),
        TuiRootModule,
        BrowserAnimationsModule,
        TuiDialogModule,
        TuiNotificationsModule,
    ],
    providers: [
        HeroService,
        VillainService,
        { provide: TUI_SANITIZER, useClass: NgDompurifySanitizer },
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
