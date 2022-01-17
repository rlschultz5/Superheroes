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
import { CharactersPageComponent } from './pages/application/characters-page/characters-page.component';
import { HomePageComponent } from './pages/home/home-page/home-page.component';
import { CharactersSharedModule } from './shared/characters/characters-shared.module';
import { SuperheroesComponent } from './pages/application/superheroes/superheroes.component';
import { VillainsComponent } from './pages/application/villains/villains.component';
import { CharacterServiceResolve } from './shared/resolves/character.resolve';
import { HeroService, VillainService } from './shared/services/superheroes.service';

@NgModule({
    declarations: [AppComponent, SuperheroesComponent, HomePageComponent, CharactersPageComponent, VillainsComponent],
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
        RouterModule.forRoot([
            { path: 'superheroes', component: SuperheroesComponent },
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
                path: 'superheroes/:id/edit',
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
                path: 'villains/:id/edit',
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
    providers: [
        HeroService,
        VillainService,
        CharacterServiceResolve,
        { provide: TUI_SANITIZER, useClass: NgDompurifySanitizer },
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
