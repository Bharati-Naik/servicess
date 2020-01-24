import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  getApp(): string { 
    return "Hello world"
  }


  constructor( private user:HttpClient ) {}
  getUser(){
    return this.user.get('assets/users.json')
  }

}
