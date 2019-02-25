import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

//import module forms
import { SeqEntryComponent } from './seq-entry/seq-entry.component';
import { LaboratoryComponent } from './laboratory/laboratory.component';
import { MaterialComponent } from './material/material.component';

//import directive validate
import { InputvalidationDirective } from './directives/inputvalidation.directive';
import { InputvalidationPositiveNumberDirective } from './directives/inputvalidation-positive-number.directive';

//create new path to differents forms
const appRoutes: Routes = [
	{path:'new-seq', component: SeqEntryComponent},
	{path:'new-laboratory', component: LaboratoryComponent},
	{path:'new-material', component: MaterialComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    SeqEntryComponent,
    LaboratoryComponent,
    InputvalidationDirective,
    MaterialComponent,
    InputvalidationPositiveNumberDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
		RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
