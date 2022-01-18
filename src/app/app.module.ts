import { CoreModule } from './core/core.module';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { TuiDialogModule, TuiNotificationsModule, TuiRootModule, TUI_SANITIZER } from '@taiga-ui/core';
import { NgDompurifySanitizer } from '@tinkoff/ng-dompurify';
import { AppComponent } from './app.component';
import { CharacterDetailComponent } from './shared/characters/character-detail/character-detail.component';
import { CharacterFormComponent } from './shared/characters/character-form/character-form.component';
import { CharactersPageComponent } from './pages/application/pages/characters-page/characters-page.component';
import { HomePageComponent } from './pages/home/home-page/home-page.component';
import { CharactersSharedModule } from './shared/characters/characters-shared.module';
import { SuperheroesPageComponent } from './pages/application/pages/superheroes-page/superheroes-page.component';
import { VillainsPageComponent } from './pages/application/pages/villains-page/villains-page.component';
import { CharacterServiceResolve } from './pages/application/resolves/character.resolve';
import { HomePageModule } from './pages/home/home.module';
import { SuperheroesModule } from './pages/application/pages/superheroes-page/superheroes.module';
import { VillainsModule } from './pages/application/pages/villains-page/villains.module';

@NgModule({
    declarations: [
        AppComponent,
        SuperheroesPageComponent,
        HomePageComponent,
        CharactersPageComponent,
        VillainsPageComponent,
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
        CharactersSharedModule,
        CoreModule,
        HomePageModule,
        SuperheroesModule,
        VillainsModule,
        RouterModule.forRoot([
            { path: 'superheroes', component: SuperheroesPageComponent },
            { path: 'homepage', component: HomePageComponent },
            { path: 'characters', component: CharactersPageComponent },
            {
                path: 'characters/create',
                component: CharacterFormComponent,
            },
            {
                path: 'superheroes/:id/detail',
                component: CharacterDetailComponent,
                resolve: { providers: CharacterServiceResolve },
                data: {
                    type: 'hero',
                },
            },
            {
                path: 'superheroes/:id/form',
                component: CharacterFormComponent,
                resolve: { providers: CharacterServiceResolve },
                data: {
                    type: 'hero',
                },
            },
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
            { path: '', component: HomePageComponent },
        ]),
        TuiRootModule,
        BrowserAnimationsModule,
        TuiDialogModule,
        TuiNotificationsModule,
    ],
    providers: [CharacterServiceResolve, { provide: TUI_SANITIZER, useClass: NgDompurifySanitizer }],
    bootstrap: [AppComponent],
})
export class AppModule {}
