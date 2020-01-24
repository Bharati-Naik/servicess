import { Component } from '@angular/core';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[ EmployeeService ]
 })
export class AppComponent {
  title = 'servicess';

 value: string = "";
 constructor(private _appService: EmployeeService) { } // Including DI
 ngOnInit(): void {
 this.value = this._appService.getApp(); // Use the service
 } 
}
