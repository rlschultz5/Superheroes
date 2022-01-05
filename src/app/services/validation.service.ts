import { FormArray } from '@angular/forms';
export class ValidationService {
    private ValidationMessages: { [key: string]: { [key: string]: string } } = {
        productName: {
            required: 'Product name is required.',
            minlength: 'Product name must be at least three characters.',
            maxlength: 'Product name cannot exceed 50 characters.',
        },
        productCode: {
            required: 'Product code is required.',
        },
        starRating: {
            range: 'Rate the product between 1 (lowest) and 5 (highest).',
        },
    };

    get powers(): FormArray {
        return this.ValidationMessages.get('powers');
    }
}
