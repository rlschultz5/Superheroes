import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperheroesDetailPageComponent } from './superheroes-detail-page.component';

describe('SuperheroesDetailPageComponent', () => {
  let component: SuperheroesDetailPageComponent;
  let fixture: ComponentFixture<SuperheroesDetailPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuperheroesDetailPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperheroesDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
