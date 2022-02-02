import { Component, OnInit } from '@angular/core';
import { DefaultSuperheroes } from './features/characters/modules/superheroes/configurations/default-superheroes.config';
import { DefaultVillains } from './features/characters/modules/villains/configurations/default-villains.config';
import { SuperheroService } from './shared/superheroes/superhero.service';
import { VillainService } from './shared/villains/villain.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
    initialSuperheroes: boolean = true;
    initialVillains: boolean = true;
    constructor(private readonly superheroService: SuperheroService, private readonly villainService: VillainService) {}

    ngOnInit(): void {
        // CREATES DEFAULT SUPERHEROES FOR SITE IF SITE HAS NEVER BEEN LAUNCHED
        if (this.superheroService.isEmpty()) {
            // NOTE: Put this in assets or app.html
            for (let index = 0; index < DefaultSuperheroes.length; index++) {
                this.superheroService.create(DefaultSuperheroes[index]);
            }
            this.initialSuperheroes = false;
        }
        // CREATES DEFAULT VILLAINS FOR SITE IF SITE HAS NEVER BEEN LAUNCHED
        if (this.villainService.isEmpty()) {
            for (let index = 0; index < DefaultVillains.length; index++) {
                this.villainService.create(DefaultVillains[index]);
            }
            this.initialVillains = false;
        }
    }
    title: string = 'Favorite Marvel Characters!';
}
