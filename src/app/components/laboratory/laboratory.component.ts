import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { CookieService } from 'ngx-cookie-service'; // import cookies
import { LaboratoryService } from '../../services/laboratory.service'; // import services

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
  @Input() laboratory: Laboratory;
  regions: Region[] = []; // array of Regions

  @ViewChild('laboratoryForm') laboratoryForm: HTMLFormElement;

  constructor(
    private cookieService: CookieService,
    private laboratoryService: LaboratoryService
  ) {}

  // Methods
  // ngOnInit will be executed teh moment the component is loaded
  // in the application
  ngOnInit() {
    this.regions = this.laboratoryService.getRegions();
    this.laboratoryService.numElement = 2;

    this.initializeForm();

    if (this.cookieService.check('laboratory')) {
      // The cookie exist
      const CookieObj: any = JSON.parse(this.cookieService.get('laboratory'));
      // add in obj reservation
      Object.assign(this.laboratory, CookieObj);
      console.log(this.laboratory);
      // fix complex objects
      // this.laboratory.setRegion(CookieObj.region);
      // console.log(CookieObj)
    }
  }

  /**
   * @name initializeForm
   * @description create new obj laboratory and set region
   * @author Andrés Tenesaca Burgos
   * @version 2019-03-24
   */
  initializeForm() {
    if (!this.laboratory) {
      this.laboratory = new Laboratory(); // create new laboratory

      this.laboratoryForm.reset();
      this.laboratoryForm.form.markAsPristine();

      // initialize region to first value
      // this.laboratory.setRegion(this.regions[0]);
    }
  }

  /**
   * @name laboratoryInput
   * @description print laboratory object in web console
   * @author Andrés Tenesaca Burgos
   * @version 2019-02-23
   */
  laboratoryInput(): void {
    // console.log(this.laboratory);

    console.log(JSON.stringify(this.laboratory));

    this.cookieService.delete('laboratory');
    // convert the object JSON a string json
    this.cookieService.set('laboratory', JSON.stringify(this.laboratory));
  }
}
