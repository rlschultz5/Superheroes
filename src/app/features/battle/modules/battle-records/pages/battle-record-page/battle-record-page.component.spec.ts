import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BattleRecordPageComponent } from './battle-record-page.component';

describe('BattleRecordPageComponent', () => {
  let component: BattleRecordPageComponent;
  let fixture: ComponentFixture<BattleRecordPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BattleRecordPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BattleRecordPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
