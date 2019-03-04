import { Component, OnInit } from '@angular/core';

import { Seq } from '../model/Seq';

@Component({
  selector: 'app-seq-form',
  templateUrl: './seq-form.component.html',
  styleUrls: ['./seq-form.component.css']
})
export class SeqFormComponent implements OnInit {
  types: string[] = ['DNA', 'RNA', 'Protein'];
  model = new Seq();
  submitted = false;

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

  constructor() {}

  ngOnInit() {
  }
}
