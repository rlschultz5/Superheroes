import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperheroesFormPageComponent } from './superheroes-form-page.component';

describe('SuperheroesFormPageComponent', () => {
  let component: SuperheroesFormPageComponent;
  let fixture: ComponentFixture<SuperheroesFormPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuperheroesFormPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperheroesFormPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
