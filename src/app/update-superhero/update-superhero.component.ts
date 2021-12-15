import { SuperheroesService } from './../services/superheroes.service';
import { Character } from './../models/characters';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-update-superhero',
  templateUrl: './update-superhero.component.html',
  styleUrls: ['./update-superhero.component.css']
})
export class UpdateSuperheroComponent {
  @Input() hero!: Character; // decorate the property with @Input()
  @Input() isHidden: boolean = true;

  constructor(private readonly service: SuperheroesService) {}

  showEdit(): void {
    this.isHidden = !this.isHidden;
  }
  saveUpdates(): void {
    this.service.editSuperhero(this.hero);
    alert("Superhero Updated!");
    this.showEdit();
  }
  
  deleteHero() {  
    this.service.deleteSuperhero(this.hero.id);
    alert("Superhero Successfully Destroyed!");
    location.reload();
    this.showEdit();
  }

}
