import { Component, OnInit } from '@angular/core';
import { IEmployee } from '../../Models/IEmployee';
import { EmployeeService } from '../Service/employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  EmpList!:IEmployee[];


  constructor(private empservice:EmployeeService,private router:Router){}

  ngOnInit(): void {
    this.empservice.getAllEmployees().subscribe(data=>{
      this.EmpList=data;
      //console.log(data);
    },error=>{alert(error)});
    
  }

  btn_Edit(empId:number):void{
  //alert("Clicked Edit successfully");
  //Persist objects are used to get items from the Javascript
     window.sessionStorage.setItem("EmpIdValue",empId.toString());//Persist Object accepts only String datatypes
     this.router.navigate(["edit"]);
  }

  btn_Delete(empId:number):void{
 //alert("Clicked Delete successfully");
 window.sessionStorage.setItem("EmpIdVal",empId.toString());
 this.router.navigate(["delete"]);
  }



}
