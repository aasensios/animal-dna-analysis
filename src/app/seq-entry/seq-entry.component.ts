import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

// Model
import {IUPAC} from '../model/IUPAC';
import {Alphabet} from '../model/Alphabet';
import {Seq} from '../model/Seq';

@Component({
  selector: 'app-seq-entry',
  templateUrl: './seq-entry.component.html',
  styleUrls: ['./seq-entry.component.css']
})
export class SeqEntryComponent implements OnInit {
  // Properties
  seq: Seq;
  alphabets: Alphabet[] = [];

  constructor() {}

  ngOnInit() {
    const alphabetNames: string[] = ['DNA', 'RNA', 'Protein'];
    const alphabetList: string[] = [IUPAC.unambiguousDna, IUPAC.unambiguousRna, IUPAC.unambiguousProtein];

    for (let i = 0; i < alphabetNames.length; i++) {
      this.alphabets.push(new Alphabet(alphabetNames[i], alphabetList[i]));
    }

    this.seq = new Seq(); // create new object
    this.seq.setAlphabet(this.alphabets[0]); // initialize to first value
  }

  /**
   * @description print sequence object in web console
   * @author Alejandro Asensio
   * @version 2019-02-25
   */
  seqEntry(): void {
    console.log(this.seq);
  }
}
