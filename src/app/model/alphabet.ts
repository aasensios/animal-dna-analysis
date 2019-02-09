/**
 * Class to control the valid letters of a Seq object.
 */
export class Alphabet {

  letters: string;

  constructor(letters?: string) {
    this.letters = letters.toUpperCase();
  }

  getLetters(): string {
    return this.letters;
  }

  setLetters(letters: string): void {
    this.letters = letters.toUpperCase();
  }

}
