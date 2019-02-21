import { Component, OnInit } from '@angular/core';

import { Laboratory } from '../model/laboratory';

@Component({
  selector: 'app-laboratory',
  templateUrl: './laboratory.component.html',
  styleUrls: ['./laboratory.component.css']
})
export class LaboratoryComponent implements OnInit {

  //properties
  laboratory: Laboratory;

  ngOnInit() {
  }

  laboratory(): void {
    console.log(this.laboratory);
  }

}
