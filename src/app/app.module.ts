import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // needed to use forms
import { NgxPopper } from 'angular-popper';

// Pagination
import { NgxPaginationModule } from 'ngx-pagination';

// Cookies
import {CookieService} from 'ngx-cookie-service';

import { AppRoutingModule } from './app-routing.module'; // needed to user routing
import { RouterModule, Routes } from '@angular/router'; // needed to user routing

import { AppComponent } from './app.component';

// Own forms
import { SequenceComponent } from './components/sequence/sequence.component';
import { KitComponent } from './components/kit/kit.component';
import { LaboratoryComponent } from './components/laboratory/laboratory.component';
import { MaterialComponent } from './components/material/material.component';
// Pagination component
import { SequenceManagementComponent } from './components/sequence-management/sequence-management.component';

// import directive validate
import { InputvalidationDirective } from './directives/inputvalidation.directive';
import { InputvalidationPositiveNumberDirective } from './directives/inputvalidation-positive-number.directive';
import { ForbiddenNameDirective } from './directives/forbidden-name.directive';

// create new path to differents forms
const appRoutes: Routes = [
  {path: 'sequences', component: SequenceComponent},
  {path: 'kits', component: KitComponent},
  {path: 'laboratories', component: LaboratoryComponent},
  {path: 'materials', component: MaterialComponent},
  {path: 'sequences-management', component: SequenceManagementComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    SequenceComponent,
    LaboratoryComponent,
    InputvalidationDirective,
    MaterialComponent,
    InputvalidationPositiveNumberDirective,
    KitComponent,
    ForbiddenNameDirective,
    SequenceManagementComponent
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
