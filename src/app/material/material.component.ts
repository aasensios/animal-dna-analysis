import { Component, OnInit } from '@angular/core';

//Model
import { Laboratory } from '../model/laboratory';
import { Material } from '../model/material';
import { Brand } from '../model/brand';

@Component({
  selector: 'app-material',
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.css']
})
export class MaterialComponent implements OnInit {
  constructor() { }

  //properties
  laboratory: Laboratory;
  material: Material;
  brands: Brand[]=[];

  //Methods
  //ngOnInit will be executed teh moment the component is loaded
  // in the application
  ngOnInit() {
    // We access to the server in order to get brand
    let brandAux: string[] = ["HP", "DELL", "NCBI"];

    for (let i:number = 0; i < brandAux.length; i++) {
        let brand = new Brand(i,brandAux[i]);
        this.brands.push(brand);
    }

    this.material = new Material();
    this.material.setBrand(this.brands[0]);

  }

  /**
   * @name materialInput
   * @description print material object in web console
   * @author Andrés Tenesaca Burgos
   * @version 2019-02-23
  */
  materialInput(): void {
    console.log(this.material);
  }

}
