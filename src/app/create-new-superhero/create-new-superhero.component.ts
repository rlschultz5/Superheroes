import { ColorType } from './../models/color-type';
import { Character } from './../models/characters';
import { SuperheroesService } from './../services/superheroes.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {getCurrencySymbol} from '@taiga-ui/addon-commerce';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-new-superhero',
  templateUrl: './create-new-superhero.component.html',
  styleUrls: ['./create-new-superhero.component.css']
})

export class CreateNewSuperheroComponent {
  superhero = {
    id: '',
    name: '',
    realName: '',
    powers: '',
    description: '',
    link: '',
    color: ''
  };

  constructor(private readonly superheroesService: SuperheroesService, 
              private readonly router: Router) { }

  onCreateClick() {
    const superhero: Character = {
      id: '',
      name: this.superhero.name,
      realName: this.superhero.realName,
      powers: [this.superhero.powers],
      description: this.superhero.description,
      link: this.superhero.link,
      color: 'white'
    };
    this.superheroesService.addSuperhero(superhero);


    // better ways to do this (toast messages)
    alert("Superhero created!")
    this.router.navigate(['/', 'superheroes']);
  }
  

}
