import { Component, OnInit } from '@angular/core';
import { SuperheroesService } from 'src/app/superheroes.service';

@Component({
  selector: 'superheroes',
  template: `
    <h2>{{ title }}</h2>
    <ul>
      <li *ngFor="let superhero of superheroes">
        {{ superhero }}
      </li>
    </ul>    
    `
})
export class SuperheroComponent implements OnInit {
  title = "List of Superheroes:";
  superheroes;
  // constructor() {
  //   let service = new SuperheroesService();
  //   this.superheroes = service.getSuperheroes();
  // }
  // Auto-constructs an instance and passes it in
  constructor(service: SuperheroesService) {
    this.superheroes = service.getSuperheroes();
  }
  ngOnInit(): void {
  }

}
