import { Injectable } from '@angular/core';

import { Seq } from '../model/Seq';
import { IUPAC } from '../model/IUPAC';

@Injectable({
  providedIn: 'root'
})
export class SequenceService {

  constructor() { }

  // We should access to a real database, but for now, we are going to work with the following arrays

  getTypes(): string[] {
    return Object.keys(IUPAC.LETTERS);
  }

  getLetters(key: string): string {
    return IUPAC.LETTERS[key];
  }

}
