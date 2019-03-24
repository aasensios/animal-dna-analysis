import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // needed to use forms

//Pagination
import { NgxPaginationModule } from 'ngx-pagination';

//Cookies
import {CookieService} from 'ngx-cookie-service';

import { AppRoutingModule } from './app-routing.module'; // needed to user routing
import { RouterModule, Routes } from '@angular/router'; // needed to user routing

import { AppComponent } from './app.component';

// Own forms
import { SeqFormComponent } from './seq-form/seq-form.component';
import { KitFormComponent } from './kit-form/kit-form.component';
import { LaboratoryComponent } from './laboratory/laboratory.component';
import { MaterialComponent } from './material/material.component';

// import directive validate
import { InputvalidationDirective } from './directives/inputvalidation.directive';
import { InputvalidationPositiveNumberDirective } from './directives/inputvalidation-positive-number.directive';
import { ForbiddenNameDirective } from './directives/forbidden-name.directive';

// create new path to differents forms
const appRoutes: Routes = [
  {path: 'new-seq', component: SeqFormComponent},
  {path: 'new-kit', component: KitFormComponent},
  {path: 'new-laboratory', component: LaboratoryComponent},
  {path: 'new-material', component: MaterialComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    SeqFormComponent,
    LaboratoryComponent,
    InputvalidationDirective,
    MaterialComponent,
    InputvalidationPositiveNumberDirective,
    KitFormComponent,
    ForbiddenNameDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgxPaginationModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [CookieService],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
