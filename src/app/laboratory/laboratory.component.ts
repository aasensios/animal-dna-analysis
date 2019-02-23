import { Component, OnInit } from '@angular/core';

//Model
import { Laboratory } from '../model/laboratory';
import { Country } from '../model/country';

@Component({
  selector: 'app-laboratory',
  templateUrl: './laboratory.component.html',
  styleUrls: ['./laboratory.component.css']
})
export class LaboratoryComponent implements OnInit {

  //properties
  laboratory: Laboratory;
  countries: Country[]=[];

  ngOnInit() {
    let countryAux: string[] = ["Barcelona", "Badalona", "Girona"];

    for (let i:number = 0; i < countryAux.length; i++) {
        let country = new Country(i,countryAux[i]);

        this.countries.push(country);
    }

    this.laboratory = new Laboratory();

    this.laboratory.setCountry(this.countries[0]);
  }

  laboratoryInput(): void {
    console.log(this.laboratory);
  }
}
