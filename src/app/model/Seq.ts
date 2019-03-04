import { IUPAC } from './IUPAC';

/**
 * @description Stores a DNA/RNA/protein sequence made of characters
 * that represent nucleotides or aminoacids in each case. It also has an associate
 * type that refers to its own type of sequence.
 * @author Alejandro Asensio
 * @version 2019-02-15
 */
export class Seq {

  // Following the ngModel Angular Tour of Heroes tutorial:
  // https://angular.io/guide/forms
  // we only need to make public the attributes in constructor
  // in order to access them (avoiding getters and setters).
  constructor(
    public seq?: string,
    public type?: string
  ) {  }

  // Specific class methods

  // TypeScript Doc style guidelines:
  // https://typedoc.org/guides/doccomments/

  /**
   * Validates its own seq attribute against its own type attribute.
   * @return true if the sequence of this object is invalid; false otherwise
   */
  invalid(): boolean {
    const letters = `IUPAC.${this.type}`;
    const invalidSeqRegex = new RegExp(`[^${letters}]`, 'i');
    return invalidSeqRegex.test(this.seq);
  }

  /**
   * TODO: method not used yet
   * If this is a DNA sequence, it is transcribed to an RNA sequence; that is,
   * changing all letters 'T's for 'U's.
   * @returns RNA Seq object when this is a valid DNA Seq; null otherwise
   */
  transcribe(): Seq {
    let rna = null;
    if (this.type === 'DNA' && !this.invalid()) {
      // global (g) and case-insensitive (i) replacement
      rna = new Seq(this.seq.replace(/T/gi, 'U'), 'RNA');
    }
    return rna;
  }

  /**
   * TODO: method not used yet
   * If this is a DNA or RNA sequence, it is translated to an aminoacid sequence
   * (protein), this is, changing each triplet of nucleotides for a letter that
   * represents an animoacid.
   * @returns Protein Seq object; null when some error occurs
   */
  // translate(): Seq {
  //   let protein = null;

  //   aminoacids = IUPAC.GENETIC_CODE ...
  //   protein = new Seq(aminoacids, 'PROTEIN');

  //   return protein;
  // }

}
