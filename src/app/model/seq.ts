// import { ReservationTime } from './reservationTime';
// import { TablePreference } from './tablePreference';
// import { SpecialRequest } from './specialRequest';

export class Seq {

  seq: string;
  alphabet: string;

  constructor(seq?: string, alphabet?: string) {
    this.seq = seq;
    this.alphabet = alphabet;
  }

  getSeq(): string {
    return this.seq;
  }

  getAlphabet(): string {
    return this.alphabet;
  }

  setSeq(seq: string): void {
    this.seq = seq;
  }

  setAlphabet(alphabet: string): void {
    this.alphabet = alphabet;
  }

  transcribe(): Seq {
    // TODO
    return new Seq();

  }

  translate(): Seq {
    // TODO
    return new Seq();
  }
}
