import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-emp-details',
  templateUrl: './emp-details.component.html',
  styleUrls: ['./emp-details.component.css'],
  providers:[EmployeeService]

})
export class EmpDetailsComponent implements OnInit {
  
  emp:any=[]
  
  constructor( private empl:EmployeeService) { }

  ngOnInit() {
    this.empl.getUser().subscribe(data=>this.emp=data)
  }

}
