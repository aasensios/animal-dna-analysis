import { Component, OnInit } from '@angular/core';

import { Kit } from '../model/Kit';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { forbiddenNameValidator } from '../directives/forbidden-name.directive';

/**
 * @description Controller for the kit form.
 * @author Alejandro Asensio
 * @version 2019-03-04
 */
@Component({
  selector: 'app-kit-form',
  templateUrl: './kit-form.component.html',
  styleUrls: ['./kit-form.component.css']
})
export class KitFormComponent implements OnInit {

  // Kit form declaration for later validation
  kitForm: FormGroup;

  // Database emulated by arrays
  usages: string[] = ['Saliva', 'Blood', 'Droppings'];
  sizes: string[] = ['Small', 'Medium', 'Large'];

  // Make the variable 'model' to refer to its model itself (Kit class)
  model = new Kit();

  // Control of clicking the Submit form button
  submitted = false;

  // Control of property 'units'
  unitsControl = new FormControl(1, [Validators.min(1), Validators.max(100)]);

  onSubmit() {
    this.submitted = true;
    console.log(this.model);
  }

  newKit() {
    this.model = new Kit();
    this.unitsControl = new FormControl(1, [Validators.min(1), Validators.max(100)]);
  }

  constructor() {}

  ngOnInit() {
    this.kitForm = new FormGroup({
      usage: new FormControl(this.model.usage, [
        Validators.required
      ]),
      size: new FormControl(this.model.size, [
        Validators.required
      ]),
      units: new FormControl(this.model.units, [
        Validators.required,
        Validators.min(1),
        Validators.max(100)
      ]),
      observations: new FormControl(this.model.observations, [
        Validators.maxLength(50)
      ]),
      submitter: new FormControl(this.model.submitter, [
        Validators.required,
        forbiddenNameValidator(/marisa/i) // <-- Here's how you pass in the custom validator.
      ])
    });
  }

  // Sometimes it's useful to define getters as shorthands for the template
  get usage() { return this.kitForm.get('usage'); }
  get size() { return this.kitForm.get('size'); }
  get units() { return this.kitForm.get('units'); }
  get observations() { return this.kitForm.get('observations'); }
  get submitter() { return this.kitForm.get('submitter'); }

}
