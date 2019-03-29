// allow to change information through components
import { Injectable } from '@angular/core';

// Model
import { Laboratory } from '../model/Laboratory';
import { Region } from '../model/Region';

@Injectable({
  providedIn: 'root'
})
export class LaboratoryService {
  // service declaration
  numElement: number;

  constructor() { }

  getRegions(): Region[] {
    // We access to the server in order to get country
    const regions: Region[] = []; // array of Regions
    const regionAux: string[] = ['Barcelona', 'Badalona', 'Girona', 'Lleida'];

    for (let i = 0; i < regionAux.length; i++) {
      // create object region with id and value and saves in var region
      const region = new Region(i, regionAux[i]);

      regions.push(region); // push in region array
    }
    return regions;
  }

}
