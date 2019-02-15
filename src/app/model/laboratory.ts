import { Address } from "./address"

/**
 * @name lab
 * @description Lab class stores the information of the current lab
 * @attribute {string} name: street of the current lab
 * @attribute {Address} address: Address class constains the location of the lab
 * @attribute {string} director: zipCode of the current lab
 * @author Andrés Tenesaca Burgos
 * @version 2019-02-15
*/

export class Laboratory{
  //properties
  name: string;
  address: Address;
  director: string;

  //Constructor
  constructor(name?:string, address?:Address, director?:string){
    this.name = name;
    this.address = address;
    this.director = director;
  }

  //Getters
  getName(): string {
    return this.name;
  }

  getAddress(): Address {
    return this.address;
  }

  getDirector(): string {
    return this.director;
  }

  //Setters
  setName(name:string): void {
    this.name = name;
  }

  setAddress(address: Address): void {
    this.address = address;
  }

  setDirector(director: string): void {
    this.director = director;
  }
}
