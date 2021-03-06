import { Component, OnInit } from '@angular/core';

// Model
import { Material } from '../../model/Material';
import { Brand } from '../../model/Brand';

@Component({
  selector: 'app-material',
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.css']
})
export class MaterialComponent implements OnInit {

  constructor() {}
  materials = ['Guantes', 'Pipeta', 'Microscopio', 'ADN de T-Rex'];

  // properties
  material: Material;
  brands: Brand[] = []; // array of Brand

  addMaterial(newMaterial: string) {
    if (newMaterial) {
      this.materials.push(newMaterial);
    }
  }

  // Methods
  // ngOnInit will be executed teh moment the component is loaded
  // in the application
  ngOnInit() {
    // We access to the server in order to get brand
    const brandAux: string[] = ['HP', 'DELL', 'NCBI']; // array with brands

    for (let i = 0; i < brandAux.length; i++) {
      // create new object brand and saves in var brand
      const brand = new Brand(i, brandAux[i]);
      this.brands.push(brand); // push in object array
    }

    this.material = new Material(); // create new object
    this.material.setBrand(this.brands[0]); // initialize to first value
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
