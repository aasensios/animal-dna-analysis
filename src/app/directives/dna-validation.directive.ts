import { Directive } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl } from '@angular/forms';

@Directive({
  selector: '[appDnaValidation]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: DnaValidationDirective,
      multi: true
    }
  ]
})
export class DnaValidationDirective implements Validator {
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
    // const nucleotides = new RegExp('^[ACTG]+$', 'i');
    const nucleotides = new RegExp('^[ACDEFGHIKLMNPQRSTVWXY]+$', 'i');

    // Check the field is defined, to avoid null pointer when accessing the field.value
    if (
      polimer != null &&
      polimer.value !== undefined &&
      polimer.value.length <= 50 &&
      nucleotides.test(polimer.value)
    ) {
      valid = true;
    }

    return valid ? null : { IsNotCorrect: true };
  }
}

// -------------------
// import { Directive, Input } from '@angular/core';
// import {
//   ValidatorFn,
//   AbstractControl,
//   NG_VALIDATORS,
//   Validator
// } from '@angular/forms';

// /**
//  * A submitter's name can't match the given regular expression.
//  * https://angular.io/guide/form-validation#custom-validators
//  */
// export function dnaValidator(): ValidatorFn {
//   return (control: AbstractControl): { [key: string]: any } | null => {
//     const nucleotides = new RegExp('^[ACTG]+$', 'i');
//     const forbidden = nucleotides.test(control.value);
//     return forbidden ? { forbiddenName: { value: control.value } } : null;
//   };
// }

// // Source: https://angular.io/guide/form-validation#adding-to-template-driven-forms
// @Directive({
//   selector: '[appDnaValidation]',
//   providers: [
//     {
//       provide: NG_VALIDATORS,
//       useExisting: DnaValidationDirective,
//       multi: true
//     }
//   ]
// })
// export class DnaValidationDirective implements Validator {
//   @Input('appDnaValidation')
//   invalidDNA: string;

//   validate(control: AbstractControl): { [key: string]: any } | null {
//     return this.invalidDNA ? dnaValidator()(control) : null;
//   }
// }
