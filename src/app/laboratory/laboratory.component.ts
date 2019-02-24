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

  ngOnInit() {
    const countryAux: string[] = ['Barcelona', 'Badalona', 'Girona'];

    for (let i = 0; i < countryAux.length; i++) {
        const country = new Country(i, countryAux[i]);

        this.countries.push(country);
    }

    this.laboratory = new Laboratory();

    this.laboratory.setCountry(this.countries[0]);
  }

  laboratoryInput(): void {
    console.log(this.laboratory);
  }
}
