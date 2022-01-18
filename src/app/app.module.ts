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
import { CharactersPageComponent } from './pages/application/pages/characters-page/characters-page.component';
import { HomePageComponent } from './pages/home/home-page/home-page.component';
import { CharactersSharedModule } from './pages/application/components/characters-shared.module';
import { CharacterServiceResolve } from './pages/application/resolves/character.resolve';
import { HomePageModule } from './pages/home/home.module';
import { VillainsModule } from './pages/application/pages/villains-page/villains.module';
import { CharacterFormComponent } from './pages/application/components/character-form/character-form.component';
import { CharactersModule } from './pages/application/pages/characters-page/characters.module';

@NgModule({
    declarations: [AppComponent, HomePageComponent],
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
        VillainsModule,
        CharactersModule,
        RouterModule.forRoot([
            { path: 'homepage', component: HomePageComponent },
            { path: 'characters', component: CharactersPageComponent },
            {
                path: 'characters/create',
                component: CharacterFormComponent,
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
