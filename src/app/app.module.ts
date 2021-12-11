import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateNewSuperheroComponent } from './create-new-superhero/create-new-superhero.component';
import { SuperheroesService } from 'src/app/superheroes.service';
import { TopBarComponent } from './top-bar/top-bar.component';
import { SuperheroComponent } from './superheroes/superhero.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateNewSuperheroComponent,
    SuperheroComponent,
    TopBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    SuperheroesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
