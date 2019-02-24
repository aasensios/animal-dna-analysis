/**
 * @name brand
 * @description brand class stores the information
 * about the brand of the materials
 * @attribute {string} id: id of the brand
 * @attribute {string} name: street of the brand
 * @author Andrés Tenesaca Burgos
 * @version 2019-02-23
*/

export class Brand{
  //properties
  id: number;
  name: string;

  //constructor
  constructor(id?:number, name?:string){
    this.id = id;
    this. name = name;
  }

  //Getter
  getId(): number {
    return this.id;
  }

  getName(): string {
    return this.name;
  }

  //Setter
  setId(id: number): void {
    this.id = id;
  }

  setName(name: string): void {
    this.name = name;
  }
}
