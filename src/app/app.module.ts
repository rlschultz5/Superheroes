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
import { FooterComponent } from './core/footer/footer.component';
import { HeaderComponent } from './core/header/header.component';
import { CharacterDetailComponent } from './pages/application/character-detail-page/character-detail-page.component';
import { CharacterEditPageComponent } from './pages/application/character-edit-page/character-edit-page.component';
import { CharactersPageComponent } from './pages/application/characters-page/characters-page.component';
import { HomePageComponent } from './pages/home/home-page/home-page.component';
import { CharactersSharedModule } from './shared/characters/characters-shared.module';
import { SuperheroesComponent } from './shared/components/superheroes/superheroes.component';
import { VillainsComponent } from './shared/components/villains/villains.component';
import { CharacterServiceResolve } from './shared/resolves/character.resolve';
import { HeroService, VillainService } from './shared/services/superheroes.service';

@NgModule({
    declarations: [
        AppComponent,
        SuperheroesComponent,
        HomePageComponent,
        CharacterEditPageComponent,
        CharactersPageComponent,
        VillainsComponent,
        CharacterDetailComponent,
        HeaderComponent,
        FooterComponent,
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
                resolve: { providers: CharacterServiceResolve },
                data: {
                    type: 'hero',
                },
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
                resolve: { providers: CharacterServiceResolve },
                data: {
                    type: 'villain',
                },
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
