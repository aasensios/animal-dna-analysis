import { IUPAC } from './IUPAC';
import { Alphabet } from './alphabet';

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
  transcribe(): any {
    let rna = null;
    if (this.alphabet == DNA && !this.invalid()) {
      // global (g) and case-insensitive (i) replacement
      rna = new Seq(this.getSeq().replace(/T/gi, 'U'), RNA);
    }
    return rna;
  }

  translate(): Seq {
    let protein = new Seq('', '');
    // TODO
    return protein;
  }
}
