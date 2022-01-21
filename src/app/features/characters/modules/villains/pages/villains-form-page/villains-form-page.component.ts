import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { characterColorMap } from 'src/app/shared/characters/configurations/character-color-map.config';
import { validationMessages } from 'src/app/shared/characters/configurations/validation-messages.config';
import { Character } from 'src/app/shared/characters/types/character.interface';
import { VillainService } from 'src/app/shared/villains/villain.service';

@Component({
    selector: 'app-villains-form-page',
    templateUrl: './villains-form-page.component.html',
    styleUrls: ['./villains-form-page.component.css'],
})
export class VillainsFormPageComponent implements OnInit {
    pageTitle!: string;
    errorMessage!: string;
    villainForm!: FormGroup;
    villainId!: string;
    isNewVillain: boolean = false;
    submittable: boolean = false;
    buttonClass!: string;
    villainDetermined: boolean = false;

    villain?: Character;
    updatedVillain!: Character;

    readonly characterColorMap = characterColorMap;

    displayMessage = validationMessages;
    errorMess: string = '';

    constructor(
        private readonly activatedRoute: ActivatedRoute,
        private readonly formBuilder: FormBuilder,
        private readonly router: Router,
        private readonly villainService: VillainService
    ) {}

    ngOnInit(): void {
        this.villainId = this.activatedRoute.snapshot.paramMap.get('id') as string;
        this.villainForm = this.formBuilder.group({
            name: ['', [Validators.required]],
            realName: ['', [Validators.required, Validators.maxLength(25)]],
            powers: this.formBuilder.array(['']),
            description: [''],
            link: [''],
            color: ['white'],
        });

        // IF NEW VILLAIN
        if (this.villainId == undefined) {
            this.isNewVillain = true;
            this.pageTitle = 'Create Villain';
            // this.villain = this.emptyVillain();
            this.buttonClass = `cursor-pointer border button-create-character`;
        }
        // IF EXISTING VILLAIN
        else {
            this.villainDetermined = true;
            this.villain = this.villainService.getById(this.villainId);
            this.buttonClass =
                'cursor-pointer border button-edit-character ' + characterColorMap[this.villain!.color] + '-hover';
            this.pageTitle = `Edit Villain: ${this.villain?.name}`;
        }
        // NOTE: create an empty form first and do a patch load if they exist
        this.villainForm = this.formBuilder.group({
            id: [this.villain?.id],
            name: [this.villain?.name, [Validators.required]],
            realName: [this.villain?.realName, [Validators.required, Validators.maxLength(25)]],
            powers: this.formBuilder.array(this.villain!.powers),
            description: [this.villain?.description],
            link: [this.villain?.link],
            color: new FormControl(this.villain?.color),
        });
        // console.log(this.villainForm.get('name')?.value);
    }
    get name() {
        return this.villainForm.get('name');
    }

    get realName() {
        return this.villainForm.get('realName');
    }

    get powerForms() {
        return this.villainForm.get('powers') as FormArray;
    }

    addPower() {
        this.powerForms.push(new FormControl(null, [Validators.minLength(1), Validators.maxLength(30)]));
    }

    removePower(index: number) {
        this.powerForms.removeAt(index);
        this.powerForms.markAsDirty();
    }

    get description() {
        return this.villainForm.get('description');
    }

    get link() {
        return this.villainForm.get('link');
    }

    get color() {
        return this.villainForm.get('color');
    }

    emptyVillain(): Character {
        return { name: '', realName: '', powers: [''], description: '', link: '', color: 'white' } as Character;
    }

    async saveVillain() {
        console.log('FIX: SAVE_VILLAIN');
        if (this.villainForm.valid) {
            console.log('FIX: SAVE_VILLAIN: VALID');
            if (this.villainForm.dirty) {
                console.log('FIX: SAVE_VILLAIN: DIRTY');
                this.updatedVillain = {
                    ...this.villain,
                    ...this.villainForm.value,
                };
                // DEBUGGING STATEMENTS
                console.log('FIX: SAVE_VILLAIN');
                console.log('this.villain:');
                console.log(this.villain);
                console.log('this.updatedVillain:');
                console.log(this.updatedVillain);
                console.log('this.isNewVillain:');
                console.log(this.isNewVillain);

                if (this.isNewVillain) {
                    try {
                        await this.villainService.create(this.updatedVillain).toPromise();
                    } catch (error) {
                        console.log('error');
                        console.error(error);
                    }
                } else {
                    try {
                        await this.villainService.update(this.updatedVillain).toPromise();
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
        this.villainForm.reset();
        alert('Superhero Successfully Saved!');
        this.router.navigate(['/characters']);
    }

    deleteVillain(): void {
        this.villainService.delete(this.villainId);
        alert('Superhero Successfully Deleted');
        // Object.keys
    }

    handleError(error: any) {
        // return this.displayMessage.realName['error'];
    }
}
