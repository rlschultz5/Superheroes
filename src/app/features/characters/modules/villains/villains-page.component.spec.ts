import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VillainsPageComponent } from './villains-page.component';

describe('VillainsComponent', () => {
    let component: VillainsPageComponent;
    let fixture: ComponentFixture<VillainsPageComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [VillainsPageComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(VillainsPageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
