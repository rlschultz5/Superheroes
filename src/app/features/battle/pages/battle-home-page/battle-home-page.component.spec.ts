import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BattleHomePageComponent } from './battle-home-page.component';

describe('BattleHomePageComponent', () => {
  let component: BattleHomePageComponent;
  let fixture: ComponentFixture<BattleHomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BattleHomePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BattleHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
