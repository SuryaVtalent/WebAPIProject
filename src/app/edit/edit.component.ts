import { Component, OnInit } from '@angular/core';
import { IDepartment } from '../../Models/IDepartment';
import { DepartmentService } from '../Service/department.service';
import { IEmployee } from '../../Models/IEmployee';
import { EmployeeService } from '../Service/employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent implements OnInit {

  EmpU:IEmployee;
  DeptList!:IDepartment[];

  constructor(private Deptserv:DepartmentService,private EmpServ:EmployeeService,private router:Router){
    this.EmpU={empId:0,eName:"",password:"",gender:"",phone:"",email:"",salary:0,address:"",deptNo:0}
  }


  ngOnInit(): void {
  // alert( window.sessionStorage.getItem("EmpIdValue"));
 this.Deptserv.getAllDepartments().subscribe(data=>{
  this.DeptList=data;
 },error=>alert(error));

  this.EmpServ.getEmployeeId(parseInt(window.sessionStorage.getItem("EmpIdValue")!.toString())).subscribe(data=>{
    this.EmpU=data;
  },error=>alert(error));

    
  }

  btn_UpdateClk():void{


    this.EmpServ.UpdateEmployee(this.EmpU).subscribe(data=>{
      alert(data +"Record Updated Succesfully");
      this.router.navigate(["home"]);
    },error=>alert(error));
 

  }

  btn_CancelClk():void{

    this.router.navigate(["home"]);

    
  }

}
