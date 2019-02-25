import { Laboratory } from "./Laboratory"
import { Brand } from "./Brand"

/**
 * @name Material
 * @description Material class stores information of the products we will need
 * to buy
 * @attribute {string} name: name of the products to buy
 * @attribute {Brand} brand: brands of the products to buy
 * @attribute {number} priceMin: Minimun price of the products to buy
 * @attribute {number} priceMax: Maximun price of the products to buy
 * @attribute {Laboratory} whichLab: name of the lab to sent the product
 * @author Andrés Tenesaca Burgos
 * @version 2019-02-15
*/

export class Material{
    //properties
    name: string;
    brand: Brand;
    priceMin: number;
    priceMax: number;
    whichLab: Laboratory;

    //constructor
    constructor(name?: string, brand?: Brand, priceMin?: number,
      priceMax?: number, whichLab?: Laboratory){
      this.name = name;
      this.brand = brand;
      this.priceMin = priceMin;
      this.priceMax = priceMax;
      this.whichLab = whichLab;
    }

    //Getters
    getName(): string{
      return this.name;
    }

    getBrand(): Brand{
      return this.brand;
    }

    getPriceMin(): number{
      return this.priceMin;
    }

    getPriceMax(): number{
      return this.priceMax;
    }

    getWhichLab(): Laboratory{
      return this.whichLab;
    }

    //Setters
    setName(name: string): void{
      this.name = name;
    }

    setBrand(brand: Brand): void{
      this.brand = brand;
    }

    setPriceMin(priceMin: number): void{
      this.priceMin = priceMin;
    }

    setPriceMax(priceMax: number): void{
      this.priceMax = priceMax;
    }

    setWhichLab(whichLab: Laboratory): void{
      this.whichLab = whichLab;
    }
}
