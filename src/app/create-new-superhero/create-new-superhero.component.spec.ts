import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNewSuperheroComponent } from './create-new-superhero.component';

describe('CreateNewSuperheroComponent', () => {
  let component: CreateNewSuperheroComponent;
  let fixture: ComponentFixture<CreateNewSuperheroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateNewSuperheroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateNewSuperheroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
