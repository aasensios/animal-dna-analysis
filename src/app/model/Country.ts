/**
 * @name country
 * @description country class stores the information
 * about the country of the laboratory
 * @attribute {string} id: id of the country
 * @attribute {string} name: street of the country
 * @author Andrés Tenesaca Burgos
 * @version 2019-02-23
 */

export class Country {
  // properties
  id: number;
  name: string;

  // constructor
  constructor(id?: number, name?: string) {
    this.id = id;
    this.name = name;
  }

  // Getter
  getId(): number {
    return this.id;
  }

  getName(): string {
    return this.name;
  }

  // Setter
  setId(id: number): void {
    this.id = id;
  }

  setName(name: string): void {
    this.name = name;
  }
}
