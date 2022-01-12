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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import {
    HeroService,
    VillainService,
} from './shared/services/superheroes.service';
import { HomePageComponent } from './pages/home/home-page/home-page.component';
import { SuperheroesComponent } from './shared/components/superheroes/superheroes.component';
import { CharactersPageComponent } from './pages/application/characters-page/characters-page.component';
import { VillainsComponent } from './shared/components/villains/villains.component';
import { CharacterDetailComponent } from './pages/application/character-detail-page/character-detail-page.component';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { CharacterEditPageComponent } from './pages/application/character-edit-page/character-edit-page.component';
import { CharacterServiceResolve } from './pages/application/character-edit-page/character-edit-page.resolve';

@NgModule({
    declarations: [
        AppComponent,
        SuperheroesComponent,
        HomePageComponent,
        CharacterEditPageComponent,
        CharactersPageComponent,
        VillainsComponent,
        CharacterDetailComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        MatInputModule,
        MatButtonModule,
        MatSelectModule,
        MatCheckboxModule,
        MatChipsModule,
        RouterModule.forRoot([
            { path: 'superheroes', component: SuperheroesComponent },
            { path: 'homepage', component: HomePageComponent },
            { path: 'characters', component: CharactersPageComponent },
            {
                path: 'characters/create',
                component: CharacterEditPageComponent,
            },
            {
                path: 'heroes/:id/detail',
                component: CharacterDetailComponent,
            },
            {
                path: 'heroes/:id/edit',
                component: CharacterEditPageComponent,
                resolve: { providers: CharacterServiceResolve },
                data: {
                    type: 'hero',
                },
            },
            {
                path: 'villains/:id/detail',
                component: CharacterDetailComponent,
            },
            {
                path: 'villains/:id/edit',
                component: CharacterEditPageComponent,
                resolve: { providers: CharacterServiceResolve },
                data: {
                    type: 'villain',
                },
            },
            { path: '', component: HomePageComponent },
        ]),
        TuiRootModule,
        BrowserAnimationsModule,
        TuiDialogModule,
        TuiNotificationsModule,
    ],
    providers: [
        HeroService,
        VillainService,
        CharacterServiceResolve,
        { provide: TUI_SANITIZER, useClass: NgDompurifySanitizer },
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
