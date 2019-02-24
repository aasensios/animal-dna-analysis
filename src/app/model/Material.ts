import { Laboratory } from './Laboratory';

/**
 * @name material
 * @description Material class stores information of the products we will need
 * to buy
 * @attribute {string} name: name of the products to buy
 * @attribute {string} brand: brands of the products to buy
 * @attribute {number} priceRange: range price of the products to buy
 * @attribute {Laboratory} whichLab: name of the lab to sent the product
 * @author Andrés Tenesaca Burgos
 * @version 2019-02-15
 */

export class Material {
  // properties
  name: string;
  brand: string;
  priceRange: number;
  whichLab: Laboratory;

  // constructor
  constructor(
    name?: string,
    brand?: string,
    priceRange?: number,
    whichLab?: Laboratory
  ) {
    this.name = name;
    this.brand = brand;
    this.priceRange = priceRange;
    this.whichLab = whichLab;
  }

  // Getters
  getName(): string {
    return this.name;
  }

  getBrand(): string {
    return this.brand;
  }

  getPriceRange(): number {
    return this.priceRange;
  }

  getWhichLab(): Laboratory {
    return this.whichLab;
  }

  // Setters
  setName(name: string): void {
    this.name = name;
  }

  setBrand(brand: string): void {
    this.brand = brand;
  }

  setPriceRange(priceRange: number): void {
    this.priceRange = priceRange;
  }

  setWhichLab(whichLab: Laboratory): void {
    this.whichLab = whichLab;
  }
}
