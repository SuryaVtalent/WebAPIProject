import { Component, OnInit } from '@angular/core';
import { DepartmentService } from '../Service/department.service';
import { IDepartment } from '../../Models/IDepartment';
import { IEmployee } from '../../Models/IEmployee';
import { Router } from '@angular/router';
import { EmployeeService } from '../Service/employee.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent implements OnInit {

  Emp:IEmployee;
  DeptList!:IDepartment[];

  constructor(private deptser:DepartmentService,private router:Router,private empser:EmployeeService){
this.Emp={empId:0,eName:"",password:"",gender:"",phone:"",email:"",salary:0,address:"",deptNo:0}

  }

  ngOnInit(): void {
  this.deptser.getAllDepartments().subscribe(data=>{
    this.DeptList=data;
  },error=>{alert(error)});
    
  }

  btn_Register():void{
  
    this.Emp.salary=parseInt(this.Emp.salary.toString());
    this.Emp.deptNo=parseInt(this.Emp.deptNo.toString());


    this.empser.InsertEmployee(this.Emp).subscribe(data=>{
      alert(data + "Record Inserted successfully");
      this.router.navigate(["home"]);
    },error=>alert(error));
 
  }

  btn_Cancel():void{
    this.router.navigate(["home"]);
  }

}
