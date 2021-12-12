export interface Superheroes {
    name: string;
    realName: string;
    powers: string[];
    description: string;
    link: string;
  }
  
  export const Superheroes = [
    {
      name: 'Beast',
      realName: 'Henry "Hank" McCoy',
      powers: ['Superhuman Strength', 'Superhuman Speed', 'Superhuman Stamina', 
        'Superhuman Durability', 'Superhuman Agility', 'Superhuman Reflexes', 
        'Superhuman Dexterity', 'Regenerative Healing Factor', 
        'Superhuman Senses', 'Timestream Attunement', 
        'Minor Pheromone Manipulation', 'Razor-Sharp Claws and Fangs'],
      description: 'Beast is a fictional character appearing in American comic'
        + 'books published by Marvel Comics and is a founding member of the X-Men.',
      link: 'https://marvel.fandom.com/wiki/Henry_McCoy_(Earth-616)#Powers_and_Abilities'
    },
    {
        name: 'Wolverine',
        realName: 'James "Logan" Howlett',
        powers: ['Regenerative Healing Factor', 'Retractable Bone Claws', 
            'Superhumanly Acute Senses', 'Superhuman Strength', 
            'Superhuman Speed', 'Superhuman Stamina', 'Superhuman Durability', 
            'Enhanced Reflexes and Agility', 'Animal Empathy'],
        description: 'James "Logan" Howlett, better known by his codename, '
            + 'Wolverine, is a fictional character from 20th Century Fox\'s '
            + 'superhero film series X-Men',
        link: 'https://marvel.fandom.com/wiki/James_Howlett_(Earth-616)'
    },
    {
        name: 'Storm',
        realName: 'Ororo Munroe',
        powers: ['Atmokinesis', 'Godhood', 'Flight'],
        description: 'Storm is a fictional character appearing in American '
            + 'comic books published by Marvel Comics. The character was '
            + 'created by writer Len Wein and artist Dave Cockrum, first '
            + 'appearing in Giant-Size X-Men #1.',
        link: 'https://marvel.fandom.com/wiki/Ororo_Munroe_(Earth-616)?so=search'
    }
  ];