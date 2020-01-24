import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';


@Component({
  selector: 'app-emp-lists',
  templateUrl: './emp-lists.component.html',
  styleUrls: ['./emp-lists.component.css'],
  providers:[EmployeeService]
})
export class EmpListsComponent implements OnInit {

  emp1:any=[]

  constructor( private empl1:EmployeeService) { }

  ngOnInit() {

    this.empl1.getUser().subscribe(data=>this.emp1=data)
  }

}
