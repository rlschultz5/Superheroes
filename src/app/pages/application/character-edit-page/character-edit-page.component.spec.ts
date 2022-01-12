import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CharacterEditPageComponent } from './character-edit-page.component';

describe('CharacterEditPageComponent', () => {
    let component: CharacterEditPageComponent;
    let fixture: ComponentFixture<CharacterEditPageComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [CharacterEditPageComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(CharacterEditPageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
