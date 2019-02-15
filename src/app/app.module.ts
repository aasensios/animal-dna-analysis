import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LaboratoryComponent } from './laboratory/laboratory.component';
import { SeqEntryComponent } from './seq-entry/seq-entry.component';

const appRoutes: Routes = [
	{path:'new-laboratory', component: LaboratoryComponent},
	{path:'new-seq', component: SeqEntryComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    SeqEntryComponent,
    LaboratoryComponent
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
