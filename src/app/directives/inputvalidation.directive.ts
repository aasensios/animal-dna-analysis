import { Directive } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl } from '@angular/forms';

@Directive({
  selector: '[appInputMinLength]',
  providers: [{provide: NG_VALIDATORS, useExisting: InputvalidationDirective, multi: true}]
})
export class InputvalidationDirective implements Validator {

  constructor() { }

  /**
  @name validate
  @description this method will recieve the control to validate
  and will perform all the validation needed over it
  @param  formFieldToValdiate
  formFieldToValdiate will be the DOM component that will have
  the directive applied
  @return the function will return an object containing the erros
  of the validation or null in case there aren't
  @version  23/02/19
  @author Andrés Tenesaca Burgos
  **/
  validate(formFieldToValdiate:AbstractControl): {[key: string]: any}{
    let validInput: boolean = false;
    let alphabet = new RegExp("^[a-zA-Z ]+$","i");

    if (formFieldToValdiate.value !== undefined &&
      formFieldToValdiate.value.length >= 6  &&
      alphabet.test(formFieldToValdiate.value)) {
        validInput = true;
    }
    return validInput ? null : {IsNotCorrect: true};
  }

}
