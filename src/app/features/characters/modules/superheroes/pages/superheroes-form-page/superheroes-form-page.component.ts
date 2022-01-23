import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { characterColorMap } from 'src/app/shared/characters/configurations/character-color-map.config';
import { validationMessages } from 'src/app/shared/characters/configurations/validation-messages.config';
import { Character } from 'src/app/shared/characters/types/character.interface';
import { SuperheroService } from 'src/app/shared/superheroes/superhero.service';

@Component({
    selector: 'app-superheroes-form-page',
    templateUrl: './superheroes-form-page.component.html',
    styleUrls: ['./superheroes-form-page.component.css'],
})
export class SuperheroesFormPageComponent implements OnInit {
    pageTitle!: string;
    errorMessage!: string;
    superheroForm!: FormGroup;
    superheroId!: string;
    isNewSuperhero: boolean = false;
    isSubmitted: boolean = false;
    submittable: boolean = false;
    buttonClass!: string;
    addPowerDisabled: boolean = true;
    superheroDetermined: boolean = false;

    superhero?: Character;
    updatedSuperhero!: Character;

    readonly characterColorMap = characterColorMap;

    displayMessage = validationMessages;
    errorMess: string = '';

    constructor(
        private readonly activatedRoute: ActivatedRoute,
        private readonly formBuilder: FormBuilder,
        private readonly router: Router,
        private readonly superheroService: SuperheroService
    ) {}

    ngOnInit(): void {
        this.superheroId = this.activatedRoute.snapshot.paramMap.get('id') as string;
        this.superheroForm = this.formBuilder.group({
            name: [null, [Validators.required]],
            realName: [null, [Validators.required, Validators.maxLength(25)]],
            powers: this.formBuilder.array([null], [Validators.minLength(1), Validators.maxLength(30)]),
            description: [null],
            link: [null],
            color: ['white'],
        });
        // IF NEW SUPERHERO
        if (this.superheroId == undefined) {
            this.isNewSuperhero = true;
            this.pageTitle = 'Create Superhero';
            this.superhero = this.emptySuperhero();
            this.buttonClass = `cursor-pointer border button-create-character`;
        }
        // IF EXISTING SUPERHERO
        else {
            this.superheroDetermined = true;
            this.superhero = this.superheroService.getById(this.superheroId);
            this.buttonClass = 'cursor-pointer border button-edit-character ' + characterColorMap[this.superhero!.color] + '-hover';
            this.pageTitle = `Edit Superhero: ${this.superhero?.name}`;
            this.superheroForm.patchValue(this.superhero);
            this.addPowerDisabled = false;
        }
    }
    get name() {
        return this.superheroForm.get('name');
    }

    get realName() {
        return this.superheroForm.get('realName');
    }

    get powerForms() {
        return this.superheroForm.get('powers') as FormArray;
    }

    addPower() {
        if (!this.powerForms.valid) {
            alert("Can't add an empty power");
        } else {
            this.powerForms.push(new FormControl(null, [Validators.minLength(1), Validators.maxLength(30)]));
        }
    }

    removePower(index: number) {
        if (index === 0 && this.powerForms.length === 1) {
            alert("There aren't any powers to remove.");
        } else {
            this.powerForms.removeAt(index);
            this.powerForms.markAsDirty();
        }
    }

    get description() {
        return this.superheroForm.get('description');
    }

    get link() {
        return this.superheroForm.get('link');
    }

    get color() {
        return this.superheroForm.get('color');
    }

    emptySuperhero(): Character {
        return { name: '', realName: '', powers: [''], description: '', link: '', color: 'white' } as Character;
    }

    async saveSuperhero() {
        if (this.superheroForm.valid) {
            if (this.superheroForm.dirty) {
                this.updatedSuperhero = {
                    ...this.superhero,
                    ...this.superheroForm.value,
                };

                if (this.isNewSuperhero) {
                    try {
                        await this.superheroService.create(this.updatedSuperhero).toPromise();
                    } catch (error) {
                        console.log('error');
                        console.error(error);
                    }
                } else {
                    try {
                        await this.superheroService.update(this.updatedSuperhero).toPromise();
                    } catch (error) {
                        console.log('error');
                        console.error(error);
                    }
                }
                this.onSaveComplete();
            }
        } else {
            this.errorMessage = 'Please correct the validation errors.';
        }
    }
    onSaveComplete(): void {
        // Reset the form to clear the flags
        this.superheroForm.reset();
        alert('Superhero Successfully Saved!');
        this.router.navigate(['/characters']);
    }

    deleteSuperhero(): void {
        this.superheroService.delete(this.superheroId);
        alert('Superhero Successfully Deleted');
        this.router.navigate(['/characters']);
    }
    verifySubmission() {
        this.isSubmitted = true;
        if (!this.isNewSuperhero && this.superheroForm.pristine) {
            alert('No changes made.');
        } else if (!this.superheroForm.valid) {
            alert('Form not valid.');
        }
    }
}
