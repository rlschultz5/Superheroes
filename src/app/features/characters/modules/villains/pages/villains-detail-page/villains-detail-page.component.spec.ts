import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VillainsDetailPageComponent } from './villains-detail-page.component';

describe('VillainsDetailPageComponent', () => {
  let component: VillainsDetailPageComponent;
  let fixture: ComponentFixture<VillainsDetailPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VillainsDetailPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VillainsDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
