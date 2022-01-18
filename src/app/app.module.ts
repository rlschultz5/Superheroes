import { CoreModule } from './core/core.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { TuiDialogModule, TuiNotificationsModule, TuiRootModule, TUI_SANITIZER } from '@taiga-ui/core';
import { NgDompurifySanitizer } from '@tinkoff/ng-dompurify';
import { AppComponent } from './app.component';
import { HomePageComponent } from './features/home/home-page/home-page.component';
import { CharacterListPageComponent } from './features/modules/characters/pages/characters-page/character-list-page.component';
import { CharacterFormComponent } from './shared/characters/components/character-form/character-form.component';
import { CharactersSharedModule } from './shared/characters/characters-shared.module';
import { HomePageModule } from './features/home/home.module';
import { CharactersModule } from './features/modules/characters/characters.module';
import { VillainsModule } from './features/modules/villains/module/villains.module';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        CharactersSharedModule,
        CoreModule,
        HomePageModule,
        VillainsModule,
        CharactersModule,
        RouterModule.forRoot([
            { path: 'homepage', component: HomePageComponent },
            { path: 'characters', component: CharacterListPageComponent },
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
    providers: [{ provide: TUI_SANITIZER, useClass: NgDompurifySanitizer }],
    bootstrap: [AppComponent],
})
export class AppModule {}
