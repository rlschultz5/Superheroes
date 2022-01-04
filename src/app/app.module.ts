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
import { CreateNewSuperheroComponent } from './create-new-superhero/create-new-superhero.component';
import { HeroService, VillainService } from './services/superheroes.service';
import { HomepageComponent } from './homepage/homepage.component';
import { SuperheroesComponent } from './superheroes/superheroes.component';
import { UpdateSuperheroComponent } from './update-superhero/update-superhero.component';
import { ModifyCharacterComponent } from './modify-character/modify-character.component';
import { CharactersComponent } from './characters/characters.component';
import { VillainsComponent } from './villains/villains.component';

@NgModule({
    declarations: [
        AppComponent,
        CreateNewSuperheroComponent,
        SuperheroesComponent,
        HomepageComponent,
        UpdateSuperheroComponent,
        ModifyCharacterComponent,
        CharactersComponent,
        VillainsComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule.forRoot([
            { path: 'superheroes', component: SuperheroesComponent },
            {
                path: 'create-new-superhero',
                component: CreateNewSuperheroComponent,
            },
            { path: 'homepage', component: HomepageComponent },
            { path: 'characters', component: CharactersComponent },
            {
                path: 'modify-character/:id',
                component: ModifyCharacterComponent,
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
