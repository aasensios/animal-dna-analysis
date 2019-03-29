import { Directive } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl } from '@angular/forms';

@Directive({
  selector: '[appZipCode]',
  providers: [{provide: NG_VALIDATORS,
    useExisting: ZipCodeDirective, multi: true}]
})
export class ZipCodeDirective implements Validator {

  constructor() { }

  validate(formFieldToValdiate:AbstractControl): {[key: string]: any}{
    let validInput: boolean = false;

    if (formFieldToValdiate.value != undefined &&
      formFieldToValdiate.value.length >=5) {
        validInput = true;
    }
    return validInput ? null : {IsBelowFive: true};
  }
}
