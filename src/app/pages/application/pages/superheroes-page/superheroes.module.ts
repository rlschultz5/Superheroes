import { SuperheroesPageComponent } from './../superheroes-page/superheroes-page.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SuperheroService } from '../../services/superhero.service';

@NgModule({
    declarations: [],
    exports: [],
    imports: [CommonModule],
    providers: [SuperheroService],
})
export class SuperheroesModule {}
