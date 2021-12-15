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
    blue: 'app-blue-btn',
    green: 'app-green-btn',
    red: 'app-red-btn',
    yellow: 'app-yellow-btn',
    white: 'app-white-btn'
  }
  
  superheroes: Character[];
  hiddenHero: boolean = true;

  // Auto-constructs an instance shared with app and passes it in
  constructor(private readonly service: SuperheroesService) {
    this.superheroes = service.getSuperheroes();
  }

}
