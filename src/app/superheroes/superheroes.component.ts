import { Component, OnInit } from '@angular/core';
import { SuperheroesService } from 'src/app/superheroes/superheroes.service';

@Component({
  selector: 'superheroes',
  styleUrls: ['./superheroes.component.css'],
  templateUrl: './superheroes.component.html',
})
export class SuperheroesComponent implements OnInit {
  title = "List of Superheroes:";
  // TODO: Get custom background color for each character
  superheroes;

  // Auto-constructs an instance shared with app and passes it in
  constructor(service: SuperheroesService) {
    this.superheroes = service.getSuperheroes();
  }
  ngOnInit(): void {
  }

}
