import { validationMessages } from '../../validation-messages';
import { characterColorMap } from '../../models/characterColorMap';
import { DataService, HeroService, VillainService } from '../../services/superheroes.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Character } from '../../models/character';
import { FormBuilder, FormControl, FormArray, Validators, FormGroup } from '@angular/forms';

@Component({
    selector: 'app-character-edit',
    templateUrl: './character-edit-page.component.html',
    styleUrls: ['./character-edit-page.component.css'],
})
export class CharacterEditPageComponent implements OnInit {
    pageTitle!: string;
    isHero!: boolean;
    errorMessage!: string;
    characterForm!: FormGroup;
    characterId!: string;
    isNewCharacter: boolean = false;
    buttonClass!: string;
    characterDetermined: boolean = false;

    character?: Character;
    updatedCharacter!: Character;
    characterService!: DataService<any>;

    readonly characterColorMap = characterColorMap;

    displayMessage = validationMessages;
    errorMess: string = '';
    // private subscription: Subscription;
    // private validationMessages: { [key: string]: { [key: string]: string } };
    // private genericValidator: GenericValidator;

    constructor(
        private readonly activatedRoute: ActivatedRoute,
        private readonly formBuilder: FormBuilder,
        private readonly router: Router,
        private readonly heroService: HeroService,
        private readonly villainService: VillainService
    ) {}

    ngOnInit(): void {
        this.characterId = this.activatedRoute.snapshot.paramMap.get('id') as string;

        // IF NEW CHARACTER
        if (this.characterId == undefined) {
            this.isNewCharacter = true;
            this.pageTitle = 'Create Character';
            this.character = this.emptyCharacter();
            this.buttonClass = `cursor-pointer border button-create-character`;
            // this.characterForm = this.formBuilder.group({
            //     name: ['', [Validators.required]],
            //     heroOrVillain: ['', [Validators.required]],
            //     realName: ['', [Validators.required, Validators.maxLength(25)]],
            //     powers: this.formBuilder.array(['']),
            //     description: [''],
            //     link: [''],
            //     color: ['white'],
            // });
        }
        // IF EXISTING CHARACTER
        else {
            this.characterDetermined = true;
            this.characterService = this.activatedRoute.snapshot.data['providers'].service;
            this.character = this.characterService.getById(this.characterId);
            this.buttonClass =
                'cursor-pointer border button-edit-character ' + characterColorMap[this.character!.color] + '-hover';
            this.pageTitle = `Edit character: ${this.character?.name}`;
        }

        this.characterForm = this.formBuilder.group({
            id: [this.character?.id],
            name: [this.character?.name, [Validators.required]],
            realName: [this.character?.realName, [Validators.required, Validators.maxLength(25)]],
            powers: this.formBuilder.array(this.character!.powers),
            description: [this.character?.description],
            link: [this.character?.link],
            color: new FormControl(this.character?.color),
            heroOrVillain: [''],
        });
    }

    get name() {
        return this.characterForm.get('name');
    }

    get realName() {
        return this.characterForm.get('realName');
    }

    get powerForms() {
        return this.characterForm.get('powers') as FormArray;
    }

    addPower() {
        this.powerForms.push(new FormControl());
    }

    removePower(index: number) {
        this.powerForms.removeAt(index);
        this.powerForms.markAsDirty();
    }

    get description() {
        return this.characterForm.get('description');
    }

    get link() {
        return this.characterForm.get('link');
    }

    get color() {
        return this.characterForm.get('color');
    }

    get heroOrVillain() {
        return this.characterForm.get('heroOrVillain');
    }

    /**
     * Determines if new character is a Superhero or Villain and sets characterDetermined
     * @param character type of character input from form
     * @returns true for valid character type, otherwise false
     */
    heroOrVillainCheck(character: string): boolean {
        console.log(character);
        if (character === 'Superhero') {
            this.isHero = true;
            this.characterDetermined = true;
            return true;
        } else if (character === 'Villain') {
            this.isHero = false;
            this.characterDetermined = true;
            console.log(true);
            return true;
        } else {
            console.log(false);
            return false;
        }
    }

    emptyCharacter(): Character {
        return { name: '', realName: '', powers: [''], description: '', link: '', color: 'white' } as Character;
    }

    async saveCharacter() {
        console.log('FIX: SAVE_CHARACTER');
        if (this.characterForm.valid) {
            console.log('FIX: SAVE_CHARACTER: VALID');
            if (this.characterForm.dirty) {
                console.log('FIX: SAVE_CHARACTER: DIRTY');
                this.updatedCharacter = {
                    ...this.character,
                    ...this.characterForm.value,
                };
                // DEBUGGING STATEMENTS
                console.log('FIX: SAVE_CHARACTER');
                console.log('this.character:');
                console.log(this.character);
                console.log('this.updatedCharacter:');
                console.log(this.updatedCharacter);
                console.log('this.isNewCharacter:');
                console.log(this.isNewCharacter);

                if (this.isNewCharacter) {
                    if (this.isHero) {
                        try {
                            await this.heroService.create(this.updatedCharacter).toPromise();
                        } catch (error) {
                            console.log('error');
                            console.error(error);
                        }
                    } else {
                        try {
                            await this.villainService.create(this.updatedCharacter).toPromise();
                        } catch (error) {
                            console.log('error');
                            console.error(error);
                        }
                    }
                    // this.characterService.create(this.updatedCharacter).subscribe({
                    //     next: () => this.onSaveComplete(),
                    //     error: (err) => (this.errorMessage = err),
                    // });
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
                        console.log('trying to update character');
                        await this.characterService.update(this.updatedCharacter).toPromise();
                        this.onSaveComplete();
                    } catch (error) {
                        console.log('error');
                        console.error(error);
                    }
                }
            }
            // else {
            //     this.onSaveComplete();
            // }
        } else {
            this.errorMessage = 'Please correct the validation errors.';
        }
    }
    onSaveComplete(): void {
        // Reset the form to clear the flags
        this.characterForm.reset();
        alert('Superhero Successfully Saved!');
        this.router.navigate(['/characters']);
    }

    deleteCharacter(): void {
        this.characterService.delete(this.characterId);
        alert('Superhero Successfully Deleted');
        // Object.keys
    }

    handleError(error: any) {
        // return this.displayMessage.realName['error'];
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
