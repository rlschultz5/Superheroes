import { Character } from '../models/characters';
import { Component } from '@angular/core';
import { SuperheroesService } from '../services/superheroes.service';

@Component({
  selector: 'app-superheroes',
  templateUrl: './superheroes.component.html',
  styleUrls: ['./superheroes.component.css']
})
export class SuperheroesComponent {
  title: string = "List of Superheroes:";
  readonly heroColorMap = {
    blue: 'app-btn btn-blue',
    green: 'app-btn btn-green',
    red: 'app-btn btn-red',
    yellow: 'app-btn btn-yellow',
    white: 'app-btn btn-white'
  }
  
  superheroes: Character[];
  hiddenHero: boolean = true;

  // Auto-constructs an instance shared with app and passes it in
  constructor(private readonly service: SuperheroesService) {
    this.superheroes = service.getSuperheroes();
  }

}
