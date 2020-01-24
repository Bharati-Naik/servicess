import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmpDetailsComponent } from './emp-details/emp-details.component';
import { EmpListsComponent } from './emp-lists/emp-lists.component';
import { EmployeeService } from './employee.service';
import { DynamicdataComponent } from './dynamicdata/dynamicdata.component';
import { Dynamicdata1Service } from'./dynamicdata1.service';
import { Getdata1Component } from './getdata1/getdata1.component'

@NgModule({
  declarations: [
    AppComponent,
    EmpDetailsComponent,
    EmpListsComponent,
    DynamicdataComponent,
    Getdata1Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  
  ],
  // providers: [ EmployeeService ],
  providers:[Dynamicdata1Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
