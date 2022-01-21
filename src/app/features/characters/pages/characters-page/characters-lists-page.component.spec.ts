import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharactersListsPageComponent } from './characters-lists-page.component';

describe('CharactersComponent', () => {
    let component: CharactersListsPageComponent;
    let fixture: ComponentFixture<CharactersListsPageComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [CharactersListsPageComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(CharactersListsPageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
