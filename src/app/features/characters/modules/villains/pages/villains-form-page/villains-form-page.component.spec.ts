import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VillainsFormPageComponent } from './villains-form-page.component';

describe('VillainsFormPageComponent', () => {
  let component: VillainsFormPageComponent;
  let fixture: ComponentFixture<VillainsFormPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VillainsFormPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VillainsFormPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
