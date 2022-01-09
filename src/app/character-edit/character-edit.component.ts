import { characterColorMap } from './../models/characterColorMap';
import {
    DataService,
    HeroService,
    VillainService,
} from '../services/superheroes.service';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Character } from '../models/character';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
    FormBuilder,
    FormControl,
    FormArray,
    Validators,
    FormControlName,
    FormGroup,
} from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-character-edit',
    templateUrl: './character-edit.component.html',
    styleUrls: ['./character-edit.component.css'],
})
export class CharacterEditComponent implements OnInit {
    pageTitle!: string;
    isHeroOrVillain!: boolean;
    errorMessage!: string;
    characterForm!: FormGroup;
    private characterId!: string;
    private isHero: boolean = false;
    isNewCharacter: boolean = false;

    character?: Character;
    characterService!: DataService<any>;

    readonly characterColorMap = characterColorMap;

    // private subscription: Subscription;

    // displayMessage: { [key: string]: string } = {};
    // private validationMessages: { [key: string]: { [key: string]: string } };
    // private genericValidator: GenericValidator;

    constructor(
        private readonly route: ActivatedRoute,
        private readonly formBuilder: FormBuilder,
        private readonly router: Router,
        private readonly heroService: HeroService,
        private readonly villainService: VillainService
    ) {}

    ngOnInit(): void {
        this.characterId = this.route.snapshot.paramMap.get('id') as string;
        this.characterService = this.route.snapshot.data['providers'].service;
        const character = this.characterService.getById(this.characterId);
        console.log(character);
        if (this.heroService.getById(this.characterId) !== undefined) {
            this.character = this.heroService.getById(this.characterId);
            this.isHero = true;
            console.log(this.character?.name);
        } else {
            this.character = this.villainService.getById(this.characterId);
        }
        if (this.characterId === '0') {
            this.isNewCharacter = true;
            this.pageTitle = 'Create character';
        } else {
            this.pageTitle = `Edit character: ${this.character?.name}`;
        }
        this.characterForm = this.formBuilder.group({
            name: ['', [Validators.required, Validators.maxLength(25)]],
            heroOrVillain: ['', [Validators.required]],
            realName: ['', [Validators.required, Validators.maxLength(25)]],
            powers: ['', [Validators.required, Validators.maxLength(25)]],
            description: [''],
            link: '',
            color: '',
        });

        // this.characterForm = this.formBuilder.group({
        //     name: ['', [Validators.required, Validators.minLength(3)]],
        //     realName: ['', [Validators.required, Validators.maxLength(50)]],
        //     powers: this.formBuilder.array([]),
        //     description: '',
        //     link: '',
        //     color: 'green',
        // });

        // this.heroId = this.route.snapshot.paramMap.get('id') as string;
        // console.log(this.heroId);
        // this.hero = this.heroService.getById(this.heroId);
    }
    async saveCharacter() {
        if (this.characterForm.valid) {
            if (this.characterForm.dirty) {
                const p = { ...this.character, ...this.characterForm.value };

                if (p.id === 0) {
                    // TODO: && type == superhero/villain
                    // TODO: make characters observables
                    if (this.isHeroOrVillain) {
                        this.heroService.create(p).subscribe({
                            next: () => this.onSaveComplete(),
                            error: (err) => (this.errorMessage = err),
                        });
                    } else {
                        this.villainService.create(p).subscribe({
                            next: () => this.onSaveComplete(),
                            error: (err) => (this.errorMessage = err),
                        });
                    }
                    // \/ old code
                    //   this.characterService.createProduct(p).subscribe({
                    //     next: () => this.onSaveComplete(),
                    //     error: (err) => (this.errorMessage = err),
                    //   });
                } else {
                    if (this.isHero) {
                        try {
                            await this.heroService.update(p).toPromise();
                        } catch (err) {
                            console.error(err);
                        }
                        // this.heroService.update(p).subscribe({
                        //     next: () => this.onSaveComplete(),
                        //     error: (err) => (this.errorMessage = err),
                        // });
                    } else {
                        try {
                            await this.villainService.update(p).toPromise();
                        } catch (err) {
                            console.error(err);
                        }
                        // this.villainService.update(p).subscribe({
                        //     next: () => this.onSaveComplete(),
                        //     error: (err) => (this.errorMessage = err),
                        // });
                    }
                    // \/ old code
                    //   this.characterService.updateProduct(p).subscribe({
                    //     next: () => this.onSaveComplete(),
                    //     error: (err) => (this.errorMessage = err),
                    //   });
                }
            } else {
                this.onSaveComplete();
            }
        } else {
            this.errorMessage = 'Please correct the validation errors.';
        }
    }
    onSaveComplete(): void {
        // Reset the form to clear the flags
        this.characterForm.reset();
        this.router.navigate(['/characters']);
    }

    deleteCharacter(): void {
        if (this.isHero) {
            this.heroService.delete(this.characterId);
        } else {
            this.villainService.delete(this.characterId);
        }
        alert('Superhero Successfully Deleted');
    }

    // this.subscription = this.route.paramMap.subscribe((params) => {
    //     const id = +params.get('id');
    //     this.getCharacter(id);
    // });

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

    // get powers(): FormArray {
    //     return this.characterForm.get('powers') as FormArray;
    // }

    // addPower(): void {
    //     this.powers.push(new FormControl());
    // }

    // saveCharacter(): void {}
}
