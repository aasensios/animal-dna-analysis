import { Directive } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl } from '@angular/forms';

@Directive({
  selector: '[appZipCode]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: ZipCodeDirective, multi: true }
  ]
})
export class ZipCodeDirective implements Validator {
  constructor() {}

  validate(field: AbstractControl): { [key: string]: any } {
    let validInput = false;

    if (field) {
      if (field.value !== undefined && field.value.length === 5) {
        validInput = true;
      }
    }

    return validInput ? null : { IsBelowFive: true };
  }
}
