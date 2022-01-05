import { ValidationMessages } from './../models/validation-messages';
import { HeroService } from '../services/superheroes.service';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Character } from '../models/character';
import {
    FormArray,
    FormBuilder,
    FormControl,
    FormGroup,
    Validators,
} from '@angular/forms';
import { GenericValidator } from '../shared/character-form';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-character-edit',
    templateUrl: './character-edit.component.html',
    styleUrls: ['./character-edit.component.css'],
})
export class CharacterEditComponent implements OnInit {
    pageTitle = 'Character Edit';
    characterForm!: FormGroup = ValidationMessages;
    character?: Character;
    private subscription: Subscription;

    displayMessage: { [key: string]: string } = {};
    // private validationMessages: { [key: string]: { [key: string]: string } };
    // private genericValidator: GenericValidator;

    get powers(): FormArray {
        return this.characterForm.get('powers') as FormArray;
    }

    constructor(
        private readonly route: ActivatedRoute,
        private readonly formBuilder: FormBuilder,
        private readonly router: Router,
        private readonly heroService: HeroService
    ) {}

    ngOnInit(): void {
        this.characterForm = this.formBuilder.group({
            name: ['', [Validators.required, Validators.minLength(3)]],
            realName: ['', [Validators.required, Validators.maxLength(50)]],
            powers: this.formBuilder.array([]),
            description: '',
            link: '',
            color: 'green',
        });

        // this.heroId = this.route.snapshot.paramMap.get('id') as string;
        // console.log(this.heroId);
        // this.hero = this.heroService.getById(this.heroId);
    }

    addPower(): void {
        this.powers.push(new FormControl());
    }

    saveCharacter(): void {}
}
