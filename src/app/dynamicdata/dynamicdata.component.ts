import { Component, OnInit } from '@angular/core';
import { Dynamicdata1Service } from '../dynamicdata1.service';

@Component({
  selector: 'app-dynamicdata',
  templateUrl: './dynamicdata.component.html',
  styleUrls: ['./dynamicdata.component.css'],
  // providers:[Dynamicdata1Service]
})
export class DynamicdataComponent implements OnInit {

  dynamic2:any=[]

  constructor(private dynamic:Dynamicdata1Service) { }

  ngOnInit() {
    this.dynamic.getuser().subscribe(data=>(this.dynamic2=data))
  }

}
