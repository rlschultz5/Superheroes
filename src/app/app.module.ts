import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CreateNewSuperheroComponent } from './create-new-superhero/create-new-superhero.component';
import { SuperheroesService } from './services/superheroes.service';
import { HomepageComponent } from './homepage/homepage.component';
import { SuperheroesComponent } from './superheroes/superheroes.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateNewSuperheroComponent,
    SuperheroesComponent,
    HomepageComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: 'superheroes', component: SuperheroesComponent},
      {path: 'create-new-superhero', component: CreateNewSuperheroComponent},
      {path: 'homepage', component: HomepageComponent},
      {path: '', component: HomepageComponent}
    ]),
  ],
  providers: [
    SuperheroesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
