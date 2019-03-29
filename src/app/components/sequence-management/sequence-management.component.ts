import { Component, OnInit } from '@angular/core';

import { Seq } from '../../model/Seq';

import { SequenceService } from '../../services/sequence.service';

/**
 * @description Controller for the sequence management pagination page.
 * @author Alejandro Asensio
 * @version 2019-03-28
 */
@Component({
  selector: 'app-sequence-management',
  templateUrl: './sequence-management.component.html',
  styleUrls: ['./sequence-management.component.css']
})
export class SequenceManagementComponent implements OnInit {
  // Properties for service
  sequence: Seq;

  // Properties to prepare pagination
  sequences: Seq[] = [];
  sequencesFiltered: Seq[] = [];
  sequenceSelected: Seq;

  // Pagination properties
  itemsPerPage: number;
  currentPage: number;
  totalItems: number;

  constructor(private sequenceService: SequenceService) {}

  ngOnInit() {
    // Modify the number as convenience
    this.loadRandomSequences(50);

    // At the end of ngOnInit, initialize pagination properties
    this.itemsPerPage = 10;
    this.currentPage = 1;
    this.totalItems = this.sequences.length;

    // Assign all sequences by default with empty filter
    this.sequencesFiltered = this.sequences;
  }

  /**
   * @description Loads random sequence objects to test the app.
   * @param items the number of objects to be randomly generated
   */
  loadRandomSequences(items: number) {
    const types: string[] = this.sequenceService.getTypes();
    let randomType: string;
    let randomLength: number;
    let possibleLetters: string;
    let randomSeq: string;

    // Generate random sequences
    for (let i = 0; i < items; i++) {
      // Randomize the type of the sequence
      randomType = types[Math.floor(Math.random() * types.length)];

      // Randomize the length of the sequence between 10 and 50
      randomLength = Math.floor(Math.random() * 50 + 10);

      // Get the posiible letters for the randomized type
      possibleLetters = this.sequenceService.getLetters(randomType);

      // Randomize the sequence itself
      randomSeq = '';
      for (let l = 0; l < randomLength; l++) {
        randomSeq += possibleLetters.charAt(
          Math.random() * possibleLetters.length
        );
      }

      // Add random sequence to sequences property
      this.sequences.push(new Seq(randomSeq, randomType));
    }
  }

  /**
   * Assigns the clicked sequence to sequenceSelected property.
   * @param seq selected sequence object
   */
  onSelect(seq: Seq) {
    this.sequenceSelected = seq;
  }

  edit(seq: Seq) {

  }
}
