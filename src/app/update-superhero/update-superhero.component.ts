import { HeroService } from './../services/superheroes.service';
import { Character } from '../models/character';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-update-superhero',
    templateUrl: './update-superhero.component.html',
})
export class UpdateSuperheroComponent {
    @Input() hero!: Character; // decorate the property with @Input()
    @Input() isHidden: boolean = true;

    constructor(private readonly service: HeroService) {}

    showEdit(): void {
        this.isHidden = !this.isHidden;
    }
    saveUpdates(): void {
        this.service.update(this.hero);
        alert('Superhero Updated!');
        this.showEdit();
    }

    deleteHero() {
        this.service.delete(this.hero.id);
        alert('Superhero Successfully Destroyed!');
        location.reload();
        this.showEdit();
    }
}
