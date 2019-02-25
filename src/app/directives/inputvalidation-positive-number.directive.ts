import { Directive } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl } from '@angular/forms';

@Directive({
  selector: '[appPositiveNumber]',
  providers: [{provide: NG_VALIDATORS,
    useExisting: InputvalidationPositiveNumberDirective, multi: true}]
})
export class InputvalidationPositiveNumberDirective implements Validator {

  constructor() { }

  validate(formFieldToValdiate:AbstractControl): {[key: string]: any}{
    let validInput: boolean = false;

    if (formFieldToValdiate.value != undefined &&
      formFieldToValdiate.value >=0) {
        validInput = true;
    }
    return validInput ? null : {IsBelowZero: true};
  }

}
