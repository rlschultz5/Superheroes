import { Component, OnInit } from '@angular/core';
import { SuperheroesService } from '../services/superheroes.service';

@Component({
  selector: 'app-update-superhero',
  templateUrl: './update-superhero.component.html',
  styleUrls: ['./update-superhero.component.css']
})
export class UpdateSuperheroComponent {

  constructor(private superheroesService: SuperheroesService) { }

}
