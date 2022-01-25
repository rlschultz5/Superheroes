import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CharacterColorMap } from 'src/app/shared/characters/configurations/character-color-map.config';
import { ValidationMessages } from 'src/app/shared/characters/configurations/validation-messages.config';
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
    isSubmitted: boolean = false;
    submittable: boolean = false;
    buttonClass!: string;
    addPowerDisabled: boolean = true;
    villainDetermined: boolean = false;

    villain?: Character;
    updatedVillain!: Character;

    readonly characterColorMap = CharacterColorMap;

    displayMessage = ValidationMessages;
    errorMess: string = '';

    constructor(
        private readonly activatedRoute: ActivatedRoute,
        private readonly formBuilder: FormBuilder,
        private readonly router: Router,
        private readonly villainService: VillainService
    ) {}

    ngOnInit() {
        this.villainId = this.activatedRoute.snapshot.paramMap.get('id') as string;
        this.villainForm = this.formBuilder.group({
            name: [null, [Validators.required]],
            realName: [null, [Validators.required, Validators.maxLength(25)]],
            powers: this.formBuilder.array([null], [Validators.minLength(1), Validators.maxLength(30)]),
            description: [null],
            link: [null],
            color: ['white'],
        });
        // IF NEW VILLAIN
        if (this.villainId == undefined) {
            this.isNewVillain = true;
            this.pageTitle = 'Create Villain';
            this.villain = this.emptyVillain();
            this.buttonClass = `cursor-pointer border button-create-character`;
        }
        // IF EXISTING VILLAIN
        else {
            this.villainDetermined = true;
            this.villain = this.villainService.getById(this.villainId);
            this.buttonClass = 'cursor-pointer border button-edit-character ' + CharacterColorMap[this.villain!.color] + '-hover';
            this.pageTitle = `Edit Villain: ${this.villain?.name}`;
            this.villainForm.patchValue(this.villain);
            this.addPowerDisabled = false;
        }
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
        if (this.villainForm.valid) {
            if (this.villainForm.dirty) {
                this.updatedVillain = {
                    ...this.villain,
                    ...this.villainForm.value,
                };

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
                this.onSaveComplete();
            }
        } else {
            this.errorMessage = 'Please correct the validation errors.';
        }
    }
    onSaveComplete() {
        // Reset the form to clear the flags
        this.villainForm.reset();
        alert('Villain Successfully Saved!');
        this.router.navigate(['/characters']);
    }

    deleteVillain() {
        this.villainService.delete(this.villainId);
        alert('Villain Successfully Deleted');
        this.router.navigate(['/characters']);
    }
    verifySubmission() {
        this.isSubmitted = true;
        if (!this.isNewVillain && this.villainForm.pristine) {
            alert('No changes made.');
        } else if (!this.villainForm.valid) {
            alert('Form not valid.');
        }
    }
}
