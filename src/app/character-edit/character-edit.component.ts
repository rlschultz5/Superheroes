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
    buttonClass!: string;

    character?: Character;
    updatedCharacter!: Character;
    characterService!: DataService<any>;

    readonly characterColorMap = characterColorMap;

    // private subscription: Subscription;

    // displayMessage: { [key: string]: string } = {};
    // private validationMessages: { [key: string]: { [key: string]: string } };
    // private genericValidator: GenericValidator;

    constructor(
        private readonly route: ActivatedRoute,
        private readonly formBuilder: FormBuilder,
        private readonly router: Router
    ) {}

    ngOnInit(): void {
        this.characterId = this.route.snapshot.paramMap.get('id') as string;

        if (this.characterId == undefined) {
            this.isNewCharacter = true;
            this.pageTitle = 'Create Character';
            this.character = {} as Character;
            this.buttonClass = `cursor-pt border btn-create`;
            console.log('if');
        } else {
            console.log('else');
            this.characterService =
                this.route.snapshot.data['providers'].service;
            this.character = this.characterService.getById(this.characterId);
            this.buttonClass =
                'cursor-pt border btn-edit-char ' +
                characterColorMap[this.character!.color] +
                '-hover';
            console.log(this.character);
            console.log(this.characterId);
            console.log(this.buttonClass);
            this.pageTitle = `Edit character: ${this.character?.name}`;
        }

        this.characterForm = this.formBuilder.group({
            // id: this.character?.id,
            name: [
                this.character?.name,
                [Validators.required, Validators.maxLength(25)],
            ],
            // heroOrVillain: ['', [Validators.required]],
            realName: ['', [Validators.required, Validators.maxLength(25)]],
            powers: this.formBuilder.array(this.character!.powers),
            description: [''],
            link: '',
            color: '',
        });
        this.characterForm.valueChanges.subscribe(console.log);
    }

    get powerForms() {
        // console.log('FORM ARRAY:');
        // console.log(this.characterForm.get('powers') as FormArray);
        return this.characterForm.get('powers') as FormArray;
    }

    addPower() {
        // const power = this.formBuilder.group({
        //     newPower: [''],
        // });
        this.powerForms.push(new FormControl());
    }

    removePower(index: number) {
        this.powerForms.removeAt(index);
        this.powerForms.markAsDirty();
    }

    async saveCharacter() {
        if (this.characterForm.valid) {
            if (this.characterForm.dirty) {
                this.updatedCharacter = {
                    ...this.character,
                    ...this.characterForm.value,
                };
                // DEBUGGING STATEMENTS
                console.log('this.character:');
                console.log(this.character);
                console.log('this.updatedCharacter:');
                console.log(this.updatedCharacter);
                console.log('this.isNewCharacter:');
                console.log(this.isNewCharacter);

                if (this.isNewCharacter) {
                    this.characterService
                        .create(this.updatedCharacter)
                        .subscribe({
                            next: () => this.onSaveComplete(),
                            error: (err) => (this.errorMessage = err),
                        });
                    // if (this.isHeroOrVillain) {
                    //     this.heroService.create(updatedCharacter).subscribe({
                    //         next: () => this.onSaveComplete(),
                    //         error: (err) => (this.errorMessage = err),
                    //     });
                    // } else {
                    //     this.villainService.create(updatedCharacter).subscribe({
                    //         next: () => this.onSaveComplete(),
                    //         error: (err) => (this.errorMessage = err),
                    //     });
                    // }
                } else {
                    try {
                        console.log('made it');
                        this.characterService
                            .update(this.characterId)
                            .toPromise();
                    } catch (err) {
                        console.log('error');
                        console.error(err);
                    }
                    // if (this.isHero) {
                    //     try {
                    //         await this.heroService
                    //             .update(updatedCharacter)
                    //             .toPromise();
                    //     } catch (err) {
                    //         console.error(err);
                    //     }
                    // } else {
                    //     try {
                    //         await this.villainService
                    //             .update(updatedCharacter)
                    //             .toPromise();
                    //     } catch (err) {
                    //         console.error(err);
                    //     }
                    // }
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
        alert('Superhero Successfully Updated');
        // this.router.navigate(['/characters']);
    }

    deleteCharacter(): void {
        this.characterService.delete(this.characterId);
        alert('Superhero Successfully Deleted');
    }

    // saveCharacter() {
    //     this.characterService.update(this.characterId);
    //     alert('Superhero Successfully Updated');
    // }

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
}
