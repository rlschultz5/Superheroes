import { Character } from '../../../../../shared/characters/types/character.interface';

export interface Villain extends Character {
    destructionCosts: number;
}
