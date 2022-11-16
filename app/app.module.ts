import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';

import { ToastModule } from '@syncfusion/ej2-angular-notifications';

import { RadioButtonModule, CheckBoxModule, ButtonModule } from '@syncfusion/ej2-angular-buttons';

import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from '../app.component';

@NgModule({ declarations: [ AppComponent ], imports: [ DropDownListModule, BrowserModule, ToastModule, RadioButtonModule, CheckBoxModule, ButtonModule], providers: [], bootstrap: [AppComponent]
})
export class AppModule { }
