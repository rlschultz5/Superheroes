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
  superhero = {
    id: '',
    name: '',
    realName: '',
    powers: '',
    description: '',
    link: '',
    color: ''
  };

  // Auto-constructs an instance shared with app and passes it in
  constructor(private superheroesService: SuperheroesService) {
    this.superheroes = superheroesService.getSuperheroes();
  }
  onShowClick(heroID: string) {
    const currSuperhero: Character | undefined = this.superheroesService.findSuperhero(heroID);
    if(currSuperhero != undefined){
      this.superhero.id = currSuperhero.id;
      this.superhero.name = currSuperhero.name;
      this.superhero.realName = currSuperhero.realName;
      [this.superhero.powers] = currSuperhero.powers;
      this.superhero.description = currSuperhero.description;
      this.superhero.color = currSuperhero.color;
    }
    alert("Superhero Info!")
  }

}
