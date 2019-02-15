import { Seq } from './seq';

/**
 * @name SeqRecord
 * @description Sequence record class stores some handy info about the sequence
 * it contains, like its name or the organism (inside the annotations array).
 * @attribute {string} id: unique code of this record
 * @attribute {Seq} seq: sequence of this record
 * @attribute {string} name: short name for this record
 * @attribute {string} description: long string to write a relevant abstract
 * @attribute {Array<string>} annotations: associative array for some fixed data like organism
 * @author Alejandro Asensio
 * @version 2019-02-15
*/
export class SeqRecord {

  id: string;
  seq: Seq;
  name: string;
  description: string;
  annotations: Array<string>;

  constructor(id?: string, seq?: Seq, name?: string, description?: string, annotations?: Array<string>) {
    this.id = id;
    this.seq = seq;
    this.name = name;
    this.description = description;
    this.annotations = annotations;
  }

  getId(): string {
    return this.id;
  }

  getSeq(): Seq {
    return this.seq;
  }

  getName(): string {
    return this.name;
  }

  getDescription(): string {
    return this.description;
  }

  getAnnotations(): Array<string> {
    return this.annotations;
  }

  setId(id: string): void {
    this.id = id;
  }

  setSeq(seq: Seq): void {
    this.seq = seq;
  }

  setName(name: string): void {
    this.name = name;
  }

  setDescription(description: string): void {
    this.description = description;
  }

  setAnnotations(annotations: Array<string>): void {
    this.annotations = annotations;
  }

  // Specific class methods

  // TypeScript Doc style guidelines:
  // https://typedoc.org/guides/doccomments/

  // /**
  //  * If this is a DNA sequence, it is transcribed to an RNA sequence; that is,
  //  * changing all letters 'T's for 'U's.
  //  * @returns RNA Seq object when this is a valid DNA Seq; null otherwise
  //  */
  // transcribe(): any {
  //   let rna = null;
  //   if (this.alphabet == IUPAC.unambiguousDna && !this.invalid()) {
  //     // global (g) and case-insensitive (i) replacement
  //     rna = new Seq(this.getSeq().replace(/T/gi, 'U'), IUPAC.unambiguousRna);
  //   }
  //   return rna;
  // }
  //
  // translate(): Seq {
  //   let protein = new Seq('', '');
  //   // TODO
  //   return protein;
  // }
}
