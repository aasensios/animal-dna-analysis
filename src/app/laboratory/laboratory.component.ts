import { Component, OnInit } from '@angular/core';

// Model
import { Laboratory } from '../model/Laboratory';
import { Country } from '../model/Country';

@Component({
  selector: 'app-laboratory',
  templateUrl: './laboratory.component.html',
  styleUrls: ['./laboratory.component.css']
})
export class LaboratoryComponent implements OnInit {

  // Properties
  laboratory: Laboratory;
  countries: Country[] = [];

  //Methods
  //ngOnInit will be executed teh moment the component is loaded
  // in the application
  ngOnInit() {
    // We access to the server in order to get country
    let countryAux: string[] = ["Barcelona", "Badalona", "Girona"];

    for (let i = 0; i < countryAux.length; i++) {
        const country = new Country(i, countryAux[i]);

        this.countries.push(country);
    }

    this.laboratory = new Laboratory();

    this.laboratory.setCountry(this.countries[0]);
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
