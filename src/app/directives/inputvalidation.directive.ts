import { Directive } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl } from '@angular/forms';

@Directive({
  selector: '[appInputMinLength]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: InputvalidationDirective,
      multi: true
    }
  ]
})
export class InputvalidationDirective implements Validator {
  constructor() {}

  /**
   * @description Validates the input length to be less or equal to 50 characters.
   * @return An object containing the errors of validation process; null otherwise.
   * @author Andres Tenesaca
   * @version 2019-02-23
   */
  validate(field: AbstractControl): { [key: string]: any } {
    let valid = false;
    const alphabetical = new RegExp('^[a-zA-Z ]+$', 'i');

    // Check the field is defined, to avoid null pointer when accessing the field.value
    if (
      field &&
      field.value !== undefined &&
      field.value.length <= 50 &&
      alphabetical.test(field.value)
    ) {
      valid = true;
    }

    return valid ? null : { IsNotCorrect: true };
  }
}
