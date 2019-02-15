/**
 * @name address
 * @description Adrress class stores the information of the input address
 * of the user
 * @attribute {string} street: street of the input address
 * @attribute {string} number: number of the input address
 * @attribute {string} zipCode: zipCode of the input address
 * @attribute {string} town: town of the input address
 * @attribute {string} country: country of the input address
 * @author Andrés Tenesaca Burgos
 * @version 2019-02-15
*/

export class Address {
  //properties
  street: string;
  number: string;
  zipCode: string;
  town: string;
  country: string;

  //Constructor
  constructor(street?:string, number?:string, zipCode?:string,
  town?:string, country?:string){
    this.street = street;
    this.number = number;
    this.zipCode = zipCode;
    this.town = town;
    this.country = country;
  }

  //Getters
  getStreet(): string{
    return this.street;
  }

  getNumber(): string{
    return this.number;
  }

  getZipCode(): string{
    return this.zipCode;
  }

  getTown(): string{
    return this.town;
  }

  getCountry(): string{
    return this.country;
  }

  //Setters
  setStreet(street: string): void {
    this.street = street;
  }

  setNumber(number: string): void {
    this.number = number;
  }

  setZipCode(zipCode: string): void {
    this.zipCode = zipCode;
  }

  setTown(town: string): void {
    this.town = town;
  }

  setCountry(country: string): void {
    this.country = country;
  }

}
