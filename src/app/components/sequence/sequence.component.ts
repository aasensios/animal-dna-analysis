import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

import { Seq } from '../../model/Seq';

import { SequenceService } from '../../services/sequence.service';

/**
 * @description Controller for the sequence form.
 * @author Alejandro Asensio
 * @version 2019-03-04
 */
@Component({
  selector: 'app-sequence',
  templateUrl: './sequence.component.html',
  styleUrls: ['./sequence.component.css']
})
export class SequenceComponent implements OnInit {
  @Input()
  sequence: Seq;
  types: string[];
  submitted = false;

  // Get the DOM element with id reservationEntryForm https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement
  @ViewChild('sequenceForm')
  sequenceForm: HTMLFormElement;

  constructor(
    private cookieService: CookieService,
    private sequenceService: SequenceService
  ) {}

  onSubmit() {
    this.submitted = true;
  }

  ngOnInit() {
    // Reset the form if there was some info into it
    this.sequenceForm.reset();
    this.sequenceForm.form.markAsPristine();
    // 'pristine' means not touched (virgin state), although the values are empty, the state may be touched.

    // Instantiate a new sequence
    this.sequence = new Seq();

    // Get the molecule types list from service
    this.types = this.sequenceService.getTypes();

    // Check if a cookie already exists
    if (this.cookieService.check('sequence')) {
      const cookie: any = JSON.parse(this.cookieService.get('sequence'));

      // Assign the value of the existing cookie to sequence property
      Object.assign(this.sequence, cookie);

      // Set the content of the cookie to our model
      this.sequence.seq = cookie.seq;
      this.sequence.type = cookie.type;
    }
  }

  cleanForm() {

  }
}
