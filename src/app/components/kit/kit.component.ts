import { Component, OnInit } from '@angular/core';

import { Kit } from '../../model/Kit';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { forbiddenNameValidator } from '../../directives/forbidden-name.directive';

import { KitService } from '../../services/kit.service';

/**
 * @description Controller for the kit form.
 * @author Alejandro Asensio
 * @version 2019-03-04
 */
@Component({
  selector: 'app-kit',
  templateUrl: './kit.component.html',
  styleUrls: ['./kit.component.css']
})
export class KitComponent implements OnInit {
  // Model
  kit = new Kit();
  sizes: string[];
  usages: string[];

  // Kit form declaration for later validation
  kitForm: FormGroup;

  // Control of clicking the Submit form button
  submitted = false;

  // Control of property 'units'
  unitsControl = new FormControl(1, [Validators.min(1), Validators.max(100)]);

  constructor(private kitService: KitService) {}

  onSubmit() {
    this.submitted = true;
  }

  newKit() {
    this.kit = new Kit();
    this.unitsControl = new FormControl(1, [
      Validators.min(1),
      Validators.max(100)
    ]);
  }

  ngOnInit() {
    // Get data from service to populate the select dropdowns
    this.sizes = this.kitService.getSizes();
    this.usages = this.kitService.getUsages();

    // Initialize form object itself
    this.kitForm = new FormGroup({
      usage: new FormControl(this.kit.usage, [Validators.required]),
      size: new FormControl(this.kit.size, [Validators.required]),
      units: new FormControl(this.kit.units, [
        Validators.required,
        Validators.min(1),
        Validators.max(100)
      ]),
      observations: new FormControl(this.kit.observations, [
        Validators.maxLength(50)
      ]),
      submitter: new FormControl(this.kit.submitter, [
        Validators.required,
        forbiddenNameValidator(/marisa/i) // <-- Here's how you pass in the custom validator.
      ])
    });
  }

  // Sometimes it's useful to define getters as shorthands for the template
  get usage() {
    return this.kitForm.get('usage');
  }
  get size() {
    return this.kitForm.get('size');
  }
  get units() {
    return this.kitForm.get('units');
  }
  get observations() {
    return this.kitForm.get('observations');
  }
  get submitter() {
    return this.kitForm.get('submitter');
  }
}
