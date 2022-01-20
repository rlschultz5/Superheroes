import { ColorType } from 'src/app/shared/characters/types/character-color-type';
import { Character } from 'src/app/shared/characters/types/character.interface';

export class Superhero implements Character {
    id!: string;
    name!: string;
    realName!: string;
    powers!: string[];
    description!: string;
    link!: string;
    color!: ColorType;
    approvalRating!: number;
    destructionCosts!: number;
}
