import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterGridDisplayComponent } from './character-grid-display.component';

describe('GridDisplayComponent', () => {
    let component: CharacterGridDisplayComponent;
    let fixture: ComponentFixture<CharacterGridDisplayComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [CharacterGridDisplayComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(CharacterGridDisplayComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
