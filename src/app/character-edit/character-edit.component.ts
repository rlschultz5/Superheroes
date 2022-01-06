import { CharacterValidator } from './../shared/character-validator';
import {
    DataService,
    HeroService,
    VillainService,
} from '../services/superheroes.service';
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
import { Subscription } from 'rxjs';
import { GenericValidator } from '../shared/generic-validator';

@Component({
    selector: 'app-character-edit',
    templateUrl: './character-edit.component.html',
    styleUrls: ['./character-edit.component.css'],
})
export class CharacterEditComponent implements OnInit {
    pageTitle = 'Character Edit';
    // errorMessage: string;
    characterForm!: FormGroup;

    character?: Character;
    // private subscription: Subscription;

    displayMessage: { [key: string]: string } = {};
    private validationMessages: CharacterValidator = new CharacterValidator();
    private genericValidator: GenericValidator = new GenericValidator(
        this.validationMessages
    );

    get powers(): FormArray {
        return this.characterForm.get('powers') as FormArray;
    }

    constructor(
        private readonly route: ActivatedRoute,
        private readonly formBuilder: FormBuilder,
        private readonly router: Router,
        private readonly heroService: HeroService,
        private readonly villainService: VillainService
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
        // this.subscription = this.route.paramMap.subscribe((params) => {
        //     const id = +params.get('id');
        //     this.getProduct(id);
        // });

        // this.heroId = this.route.snapshot.paramMap.get('id') as string;
        // console.log(this.heroId);
        // this.hero = this.heroService.getById(this.heroId);
    }

    // getProduct(id: number): void {
    //     if (this.heroService.getById(id.toString()) !== undefined) {
    //         this.heroService.getById(id.toString()).subscribe({
    //             next: (product: Product) => this.displayProduct(product),
    //             error: (err) => (this.errorMessage = err),
    //         });
    //     } else {
    //         this.villainService.getProduct(id).subscribe({
    //             next: (product: Product) => this.displayProduct(product),
    //             error: (err) => (this.errorMessage = err),
    //         });
    //     }
    // }

    addPower(): void {
        this.powers.push(new FormControl());
    }

    saveCharacter(): void {}
}
