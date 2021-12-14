import { Characters } from '../models/characters';
import { Component } from '@angular/core';
import { SuperheroesService } from '../services/superheroes.service';

@Component({
  selector: 'app-superheroes',
  styleUrls: ['./superheroes.component.css'],
  templateUrl: './superheroes.component.html',
})
export class SuperheroesComponent {
  title: string = "List of Superheroes:";
  // TODO: Get custom background color for each character
  superheroes: Characters[];

  // Auto-constructs an instance shared with app and passes it in
  constructor(service: SuperheroesService) {
    this.superheroes = service.getSuperheroes();
  }

}
