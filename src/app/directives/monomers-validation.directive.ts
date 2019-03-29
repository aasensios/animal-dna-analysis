import { Directive } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl } from '@angular/forms';

@Directive({
  selector: '[appMonomersValidation]'
})
export class MonomersValidationDirective {
  constructor() {}

  /**
   * @description Validates the input polimer to be composed by valid monomers
   * (nucleotides for DNA/RNA, or amino acids for Proteins).
   * @return An object containing the errors of validation process; null otherwise.
   * @author Alejandro Asensio
   * @version 2019-02-29
   */
  validate(polimer: AbstractControl): { [key: string]: any } {
    let valid = false;
    const nucleotides = new RegExp('^[ACTG ]+$', 'i');

    if (
      polimer.value !== undefined &&
      polimer.value.length <= 50 &&
      nucleotides.test(polimer.value)
    ) {
      valid = true;
    }
    return valid ? null : { IsNotCorrect: true };
  }
}
