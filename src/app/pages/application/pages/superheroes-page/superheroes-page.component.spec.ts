import { SuperheroService } from '../../services/data.service';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperheroesPageComponent } from './superheroes-page.component';

describe('SuperheroesComponent', () => {
    let component: SuperheroesPageComponent;
    let fixture: ComponentFixture<SuperheroesPageComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [SuperheroesPageComponent],
            providers: [SuperheroService],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(SuperheroesPageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
