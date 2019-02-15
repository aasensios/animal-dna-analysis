import { IUPAC } from './IUPAC';

/**
 * @name Seq
 * @description Sequence class stores a DNA or RNA or Protein string made of
 * characters that represent nucleotides or aminoacids. It also has an associate
 * alphabet to label its own type of sequence.
 * @attribute {string} seq: DNA or RNA or Protein string
 * @attribute {string} alphabet: valid letters for its own sequence
 * @author Alejandro Asensio
 * @version 2019-02-15
*/
export class Seq {

  seq: string;
  alphabet: string;

  constructor(seq?: string, alphabet?: string) {
    this.seq = seq.toUpperCase();
    this.alphabet = alphabet;
  }

  getSeq(): string {
    return this.seq;
  }

  getAlphabet(): string {
    return this.alphabet;
  }

  setSeq(seq: string): void {
    this.seq = seq.toUpperCase();
  }

  setAlphabet(alphabet: string): void {
    this.alphabet = alphabet;
  }

  // Specific class methods

  // TypeScript Doc style guidelines:
  // https://typedoc.org/guides/doccomments/

  /**
   * Validates its own seq attribute with its own alphabet attribute.
   * @return true if the sequence of this object is invalid; false otherwise
   */
  invalid(): boolean {
    const INVALID_ALPHABET = new RegExp(`[^${this.alphabet}]`, 'i');
    return INVALID_ALPHABET.test(this.seq);
  }

  /**
   * If this is a DNA sequence, it is transcribed to an RNA sequence; that is,
   * changing all letters 'T's for 'U's.
   * @returns RNA Seq object when this is a valid DNA Seq; null otherwise
   */
  transcribe(): any {
    let rna = null;
    if (this.alphabet == IUPAC.unambiguousDna && !this.invalid()) {
      // global (g) and case-insensitive (i) replacement
      rna = new Seq(this.getSeq().replace(/T/gi, 'U'), IUPAC.unambiguousRna);
    }
    return rna;
  }

  translate(): Seq {
    let protein = new Seq('', '');
    // TODO
    return protein;
  }
}
