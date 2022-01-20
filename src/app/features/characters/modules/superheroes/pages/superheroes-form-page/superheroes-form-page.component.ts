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
    submittable: boolean = false;
    buttonClass!: string;
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
            name: ['', [Validators.required]],
            realName: ['', [Validators.required, Validators.maxLength(25)]],
            powers: this.formBuilder.array(['']),
            description: [''],
            link: [''],
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
            this.buttonClass =
                'cursor-pointer border button-edit-character ' + characterColorMap[this.superhero!.color] + '-hover';
            this.pageTitle = `Edit Superhero: ${this.superhero?.name}`;
        }
        // NOTE: create an empty form first and do a patch load if they exist
        this.superheroForm = this.formBuilder.group({
            name: [this.superhero?.name, [Validators.required]],
            realName: [this.superhero?.realName, [Validators.required, Validators.maxLength(25)]],
            powers: this.formBuilder.array(this.superhero!.powers),
            description: [this.superhero?.description],
            link: [this.superhero?.link],
            color: new FormControl(this.superhero?.color),
        });
        console.log(this.superheroForm.get('name')?.value);
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
        this.powerForms.push(new FormControl(null, [Validators.minLength(1), Validators.maxLength(30)]));
    }

    removePower(index: number) {
        this.powerForms.removeAt(index);
        this.powerForms.markAsDirty();
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
        console.log('FIX: SAVE_SUPERHERO');
        if (this.superheroForm.valid) {
            console.log('FIX: SAVE_SUPERHERO: VALID');
            if (this.superheroForm.dirty) {
                console.log('FIX: SAVE_SUPERHERO: DIRTY');
                this.updatedSuperhero = {
                    ...this.superhero,
                    ...this.superheroForm.value,
                };
                // DEBUGGING STATEMENTS
                console.log('FIX: SAVE_SUPERHERO');
                console.log('this.superhero:');
                console.log(this.superhero);
                console.log('this.updatedSuperhero:');
                console.log(this.updatedSuperhero);
                console.log('this.isNewSuperhero:');
                console.log(this.isNewSuperhero);

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
                        this.onSaveComplete();
                    } catch (error) {
                        console.log('error');
                        console.error(error);
                    }
                }
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
        // Object.keys
    }

    handleError(error: any) {
        // return this.displayMessage.realName['error'];
    }
}
