import { Component, OnInit } from '@angular/core';

// Model
import { IUPAC } from '../model/IUPAC';
import { Seq } from '../model/Seq';

@Component({
  selector: 'app-seq-entry',
  templateUrl: './seq-entry.component.html',
  styleUrls: ['./seq-entry.component.css']
})
export class SeqEntryComponent implements OnInit {
  // Properties
  seq: Seq;
  seqTypes: string[] = ['DNA', 'RNA', 'Protein'];

  constructor() {}

  ngOnInit() {
    /* const seqTypesDDBB = ['DNA', 'RNA', 'Protein'];
    for (let seqType of seqTypesDDBB) {
      switch (seqType) {
        case 'DNA': {

        }
      }
    } */

    this.seq = new Seq('', IUPAC.unambiguousDna);
    console.log(this.seq);
    
  }

  seqEntry(): void {
    console.log(this.seq);
  }
}
