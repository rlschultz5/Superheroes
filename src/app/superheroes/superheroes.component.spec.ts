import { SuperheroesService } from '../services/superheroes.service';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperheroesComponent } from './superheroes.component';

describe('SuperheroComponent', () => {
  let component: SuperheroesComponent;
  let fixture: ComponentFixture<SuperheroesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuperheroesComponent ],
      providers: [SuperheroesService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperheroesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
