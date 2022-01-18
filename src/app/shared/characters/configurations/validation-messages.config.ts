export const validationMessages = {
    characterName: {
        required: 'Character name is required.',
    },
    realName: {
        required: "Character's real name is required.",
        maxlength: (context: { requiredLength: number; actualLength: number }) =>
            `Character's real name can't exceed ${context.requiredLength} characters`,
    },
    superheroOrVillain: {
        required: 'You must choose either Superhero or Villain',
    },
};
