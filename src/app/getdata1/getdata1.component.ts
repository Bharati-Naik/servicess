import { Component, OnInit } from '@angular/core';
import { GetdataService } from '../getdata.service';

@Component({
  selector: 'app-getdata1',
  templateUrl: './getdata1.component.html',
  styleUrls: ['./getdata1.component.css']
})
export class Getdata1Component implements OnInit {

  mno:any=[];
  
  constructor(private eng:GetdataService) { }

  ngOnInit() {
    this.eng.fun().subscribe(data=>(this.mno=data));
  }

}
