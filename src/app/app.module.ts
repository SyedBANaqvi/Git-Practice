import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StudentEnrollComponent } from './student-enroll/student-enroll.component';

// import { AppRoutingModule } from './app-routing.module';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatRadioModule} from '@angular/material/radio';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';

import { FlexLayoutModule } from "@angular/flex-layout";

import {MatIconModule} from '@angular/material/icon';


import {MatCardModule} from '@angular/material/card';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';


import { NgxMaskModule } from 'ngx-mask'
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { TextMaskModule } from 'angular2-text-mask';
import { CheckComponent } from './check/check.component';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { StudentInformationComponent } from './student-information/student-information.component';
import {MatTabsModule} from '@angular/material/tabs';

@NgModule({
  declarations: [
    AppComponent,
    StudentEnrollComponent,
    CheckComponent,
    StudentInformationComponent
  ],
  imports: [
    BrowserModule,
    // AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatCheckboxModule,
    MatButtonModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatIconModule,
    MatCardModule,
    NoopAnimationsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    NgxMaskModule,
    MatButtonToggleModule,
    TextMaskModule,
    MatAutocompleteModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
