import { Character } from '../models/characters';
import { Component } from '@angular/core';
import { SuperheroesService } from '../services/superheroes.service';

@Component({
  selector: 'app-superheroes',
  styleUrls: ['./superheroes.component.css'],
  templateUrl: './superheroes.component.html',
})
export class SuperheroesComponent {
  title: string = "List of Superheroes:";
  readonly heroColorMap = {
    blue: 'tw-blue-btn',
    green: 'tw-green-btn',
    red: 'tw-red-btn',
    yellow: 'tw-yellow-btn',
    white: 'tw-white-btn'
  }
  
  superheroes: Character[];

  // Auto-constructs an instance shared with app and passes it in
  constructor(service: SuperheroesService) {
    this.superheroes = service.getSuperheroes();
    
  }

}
