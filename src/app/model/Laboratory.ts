import { Region } from './Region';

/**
 * @name Laboratory
 * @description Laboratory class stores the information of the current lab
 * @attribute {string} name: street of the current lab
 * @attribute {string} street: street of the current lab
 * @attribute {string} number: number of the current lab
 * @attribute {string} zipCode: zipCode of the current lab
 * @attribute {string} town: town of the current lab
 * @attribute {Region} region: region of the current lab
 * @attribute {string} director: zipCode of the current lab
 * @author Andrés Tenesaca Burgos
 * @version 2019-02-15
 */

export class Laboratory {
  // Properties
  name: string;
  street: string;
  number: string;
  zipCode: string;
  town: string;
  region: Region;
  director: string;

  // Constructor
  constructor(
    name?: string,
    street?: string,
    number?: string,
    zipCode?: string,
    town?: string,
    region?: Region,
    director?: string
  ) {
    this.name = name;
    this.street = street;
    this.number = number;
    this.zipCode = zipCode;
    this.town = town;
    this.region = region;
    this.director = director;
  }

  // Getters
  getName(): string {
    return this.name;
  }

  getStreet(): string {
    return this.street;
  }

  getNumber(): string {
    return this.number;
  }

  getZipCode(): string {
    return this.zipCode;
  }

  getTown(): string {
    return this.town;
  }

  getRegion(): Region {
    return this.region;
  }

  getDirector(): string {
    return this.director;
  }

  // Setters
  setName(name: string): void {
    this.name = name;
  }

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

  setRegion(region: Region): void {
    this.region = region;
  }

  setDirector(director: string): void {
    this.director = director;
  }
}
