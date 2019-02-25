/**
 * @name Region
 * @description Region class stores the information
 * about the region of the laboratory
 * @attribute {string} id: id of the region
 * @attribute {string} name: street of the region
 * @author Andrés Tenesaca Burgos
 * @version 2019-02-23
 */

export class Region {
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
