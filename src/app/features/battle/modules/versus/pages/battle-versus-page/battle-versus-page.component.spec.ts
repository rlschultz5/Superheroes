import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BattleVersusPageComponent } from './battle-versus-page.component';

describe('BattleVersusPageComponent', () => {
  let component: BattleVersusPageComponent;
  let fixture: ComponentFixture<BattleVersusPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BattleVersusPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BattleVersusPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
