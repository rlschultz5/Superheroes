import { ColorType } from './color-type';

export interface Character {
    id: string;
    name: string;
    realName: string;
    powers: string[];
    description: string;
    link: string;
    color: ColorType;
}
