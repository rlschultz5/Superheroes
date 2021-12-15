import { NgDompurifySanitizer } from "@tinkoff/ng-dompurify";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { TuiRootModule, TuiDialogModule, TuiNotificationsModule, TUI_SANITIZER } from "@taiga-ui/core";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CreateNewSuperheroComponent } from './create-new-superhero/create-new-superhero.component';
import { SuperheroesService } from './services/superheroes.service';
import { HomepageComponent } from './homepage/homepage.component';
import { SuperheroesComponent } from './superheroes/superheroes.component';
import { UpdateSuperheroComponent } from './update-superhero/update-superhero.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateNewSuperheroComponent,
    SuperheroesComponent,
    HomepageComponent,
    UpdateSuperheroComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {path: 'superheroes', component: SuperheroesComponent},
      {path: 'create-new-superhero', component: CreateNewSuperheroComponent},
      {path: 'homepage', component: HomepageComponent},
      {path: '', component: HomepageComponent}
    ]),
      TuiRootModule,
      BrowserAnimationsModule,
      TuiDialogModule,
      TuiNotificationsModule
],
  providers: [
    SuperheroesService,
      {provide: TUI_SANITIZER, useClass: NgDompurifySanitizer}
],
  bootstrap: [AppComponent]
})
export class AppModule { }
