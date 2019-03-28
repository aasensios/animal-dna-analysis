import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

import { Seq } from '../../model/Seq';

import { SequenceService } from '../../services/sequence.service';

@Component({
  selector: 'app-sequence',
  templateUrl: './sequence.component.html',
  styleUrls: ['./sequence.component.css']
})
export class SequenceComponent implements OnInit {
  types: string[] = this.sequenceService.getTypes();
  model = new Seq();
  submitted = false;

  @Input()
  sequence: Seq;

  // Get the DOM element with id reservationEntryForm https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement
  @ViewChild('reservationEntryForm')
  seqForm: HTMLFormElement;

  onSubmit() {
    this.submitted = true;
    console.log(this.model);
  }

  // TODO: Remove this when we're done (debugging)
  // get diagnostic() {
  //   return JSON.stringify(this.model);
  // }

  newSeq() {
    this.model = new Seq('', '');
  }

  constructor(
    private cookieService: CookieService,
    private sequenceService: SequenceService
  ) {}

  ngOnInit() {}
}
