import { Component, OnInit } from '@angular/core';

// Model
import { Laboratory } from '../../model/Laboratory';
import { Region } from '../../model/Region';

@Component({
  selector: 'app-laboratory',
  templateUrl: './laboratory.component.html',
  styleUrls: ['./laboratory.component.css']
})
export class LaboratoryComponent implements OnInit {

  // Properties
  laboratory: Laboratory;
  regions: Region[] = []; //array of Regions

  //Methods
  //ngOnInit will be executed teh moment the component is loaded
  // in the application
  ngOnInit() {
    // We access to the server in order to get country

    //array with regions
    const regionAux: string[] = ["Barcelona", "Badalona", "Girona", "Lleida"];

    for (let i = 0; i < regionAux.length; i++) {
      //create object region with id and value and saves in var region
      const region = new Region(i, regionAux[i]);

      this.regions.push(region); //push in region array
    }

    this.laboratory = new Laboratory(); //create new laboratory

    //initialize region to first value
    this.laboratory.setRegion(this.regions[0]);
  }

  /**
   * @name laboratoryInput
   * @description print laboratory object in web console
   * @author Andrés Tenesaca Burgos
   * @version 2019-02-23
  */
  laboratoryInput(): void {
    console.log(this.laboratory);
  }
}
