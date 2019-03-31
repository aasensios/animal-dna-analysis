import { Directive } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl } from '@angular/forms';

@Directive({
  selector: '[appNegativeNumber]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: InputvalidationNegativeNumberDirective,
      multi: true
    }
  ]
})
export class InputvalidationNegativeNumberDirective implements Validator {
  constructor() {}

  validate(field: AbstractControl): { [key: string]: any } {
    let validInput = false;

    if (field) {
      if (field.value !== undefined && field.value >= 0) {
        validInput = true;
      }
    }

    return validInput ? null : { IsBelowZero: true };
  }
}
