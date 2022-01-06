import { HeroService, VillainService } from '../services/superheroes.service';
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
    pageTitle = 'Character Edit';
    isHeroOrVillain!: boolean;
    errorMessage!: string;
    characterForm!: FormGroup;
    private characterId?: string;
    private isHero: boolean = false;

    character?: Character;

    readonly characterColorMap = {
        blue: 'app-btn detail-blue',
        green: 'app-btn detail-green',
        red: 'app-btn detail-red',
        yellow: 'app-btn detail-yellow',
        white: 'app-btn detail-white',
        purple: 'app-btn detail-purple',
    };

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
        if (this.heroService.getById(this.characterId) !== undefined) {
            this.character = this.heroService.getById(this.characterId);
            this.isHero = true;
            console.log(this.character?.name);
        } else {
            this.character = this.villainService.getById(this.characterId);
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
    saveCharacter(): void {
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
                        this.heroService.update(p).subscribe({
                            next: () => this.onSaveComplete(),
                            error: (err) => (this.errorMessage = err),
                        });
                    } else {
                        this.villainService.update(p).subscribe({
                            next: () => this.onSaveComplete(),
                            error: (err) => (this.errorMessage = err),
                        });
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
