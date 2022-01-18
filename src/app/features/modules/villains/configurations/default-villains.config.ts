import { Character } from '../../../../shared/characters/types/character.interface';

export const defaultVillains: Character[] = [
    {
        id: '',
        name: 'Magneto',
        realName: 'Erik Lehnsherr',
        powers: ['Magnetokinesis', 'Astral Projection (possibly formerly)', 'Telepathic Resistance'],
        description:
            'Known by many names, Erik Lehnsherr is a powerful mutant who walks on gray areas to protect ' +
            'his race as Magneto, the master of magnetism.[20] During his youth, he endured atrocities ' +
            'performed by the Nazi dictatorship in Auschwitz. After escaping, he learned at this cost of ' +
            "his own daughter's life that he had the mutant ability to generate and control magnetic fields, " +
            'a condition that caused additional hate and fear from those who were different from him.[21] ' +
            'Being a target for so long and explicitly rejecting the possibility of any harmony with humans, ' +
            'Magneto aimed to conquer the world to enable mutants, whom he refers to as Homo superior, to ' +
            'become the dominant species on Earth.',
        link: 'https://marvel.fandom.com/wiki/Max_Eisenhardt_(Earth-616)#Powers',
        color: 'red',
    },
    {
        id: '',
        name: 'Thanos',
        realName: 'Thanos',
        powers: [
            'Godlike Strength',
            'Superhuman Agility',
            'Superhuman Reflexes',
            'Superhuman Stamina',
            'Nigh-Invulnerability',
            'Immortality',
            'Regenerative Healing Factor',
            'Energy Manipulation & Projection',
            'Telepathy',
            'Matter Manipulation & Control',
            'Mystic Capabilities',
        ],
        description:
            "Thanos was one of the last sons of A'Lars, progenitor of the second colony of Eternals " +
            'on Titan, and Sui-San, the last survivor of the original settlement of Eternals in this ' +
            'moon. He was born with purple, hide-like skin and a massive body due to his Deviant Syndrome. ' +
            'The very first time his mother laid her eyes on the baby, she was driven mad and tried to kill him.',
        link: '',
        color: 'purple',
    },
    {
        id: '',
        name: 'Sabretooth',
        realName: 'Victor Creed',
        powers: [
            'Regenerative Healing Factor',
            'Superhuman Senses',
            'Claws',
            'Fangs',
            'Superhuman Strength',
            'Superhuman Speed',
            'Superhuman Stamina',
            'Superhuman Durability',
            'Enhanced Reflexes and Agility',
        ],
        description:
            'Sabretooth (Victor Creed) is a fictional character appearing in American comic books published by ' +
            'Marvel Comics, most commonly in association with the X-Men, in particular as an enemy of Wolverine.',
        link: 'https://marvel.fandom.com/wiki/Victor_Creed_(Earth-616)',
        color: 'yellow',
    },
];
