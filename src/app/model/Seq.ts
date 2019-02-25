import { Alphabet } from './Alphabet';
import { IUPAC } from './IUPAC';

/**
 * @description Stores a DNA or RNA or Protein sequence made of characters
 * that represent nucleotides or aminoacids. It also has an associate
 * alphabet to label its own type of sequence.
 * @attribute seq: DNA or RNA or Protein string
 * @attribute alphabet: Alphabet object with valid letters for its own sequence
 * @author Alejandro Asensio
 * @version 2019-02-15
 */
export class Seq {

  seq: string;
  alphabet: Alphabet;

  constructor(seq?: string, alphabet?: Alphabet) {
    this.seq = seq.toUpperCase();
    this.alphabet = alphabet;
  }

  getSeq(): string {
    return this.seq;
  }

  getAlphabet(): Alphabet {
    return this.alphabet;
  }

  setSeq(seq: string): void {
    this.seq = seq.toUpperCase();
  }

  setAlphabet(alphabet: Alphabet): void {
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
    const INVALID_ALPHABET = new RegExp(`[^${this.alphabet.letters}]`, 'i');
    return INVALID_ALPHABET.test(this.seq);
  }

  /**
   * If this is a DNA sequence, it is transcribed to an RNA sequence; that is,
   * changing all letters 'T's for 'U's.
   * @returns RNA Seq object when this is a valid DNA Seq; null otherwise
   */
  transcribe(): Seq {
    let rna = null;
    if (this.alphabet.letters === IUPAC.unambiguousDna && !this.invalid()) {
      // global (g) and case-insensitive (i) replacement
      rna = new Seq(this.seq.replace(/T/gi, 'U'), new Alphabet('RNA', IUPAC.unambiguousRna));
    }
    return rna;
  }

  /**
   * If this is a DNA or RNA sequence, it is translated to an aminoacid sequence
   * (protein), this is, changing each triplet of nucleotides for a letter that
   * represents an animoacid.
   * @returns Protein Seq object; null when some error occurs
   */
  translate(): Seq {
    let protein = null;
    // TODO


    // protein = new Seq(aminoacids, new Alphabet('Protein', IUPAC.unambiguousProtein));
    return protein;
  }

}
