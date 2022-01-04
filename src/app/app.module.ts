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

@NgModule({
    declarations: [
        AppComponent,
        SuperheroesComponent,
        HomepageComponent,
        UpdateSuperheroComponent,
        CharactersComponent,
        VillainsComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule.forRoot([
            { path: 'superheroes', component: SuperheroesComponent },
            { path: 'homepage', component: HomepageComponent },
            { path: 'characters', component: CharactersComponent },
            {
                path: 'character/:id',
                component: CharacterComponent,
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
