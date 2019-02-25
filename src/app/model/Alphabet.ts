/**
 * @description Stores a DNA or RNA or Protein sequence reference to indicate
 * the valid values.
 * @attribute name: Alphabet name
 * @attribute letters: IUPAC valid string (all possible valid letters)
 * @author Alejandro Asensio
 * @version 2019-02-25
 */
export class Alphabet {

  name: string;
  letters: string;

  constructor(name?: string, letters?: string) {
    this.name = name;
    this.letters = letters;
  }

  getName(): string {
    return this.name;
  }

  getLetters(): string {
    return this.letters;
  }

  setName(name: string): void {
    this.name = name;
  }

  setLetters(letters: string): void {
    this.letters = letters;
  }

}
