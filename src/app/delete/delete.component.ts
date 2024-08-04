import { Component, OnInit } from '@angular/core';
import { IDepartment } from '../../Models/IDepartment';
import { DepartmentService } from '../Service/department.service';
import { EmployeeService } from '../Service/employee.service';
import { Router } from '@angular/router';
import { IEmployee } from '../../Models/IEmployee';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrl: './delete.component.css'
})
export class DeleteComponent implements OnInit {

EmpD!:IEmployee;
DeptList!:IDepartment[];

  constructor(private deptservice:DepartmentService,private empserv:EmployeeService,private router:Router){
 this.EmpD={empId:0,eName:"",password:"",gender:"",phone:"",email:"",salary:0,address:"",deptNo:0}
  }


  ngOnInit(): void {
   // alert(window.sessionStorage.getItem("EmpIdVal"));
   this.deptservice.getAllDepartments().subscribe(data=>{
    this.DeptList=data;
   },error=>alert(error));


   this.empserv.getEmployeeId(parseInt(window.sessionStorage.getItem("EmpIdVal")!.toString())).subscribe(data=>{
    this.EmpD=data;
   },error=>alert(error));

  }

  btn_DeleteClk():void{

    this.empserv.DeleteEmployee(parseInt(window.sessionStorage.getItem("EmpIdVal")!.toString())).subscribe(data=>{
      alert(data + "Record Deleted Successfully");
      this.router.navigate(["home"]);
    },error=>alert(error));
  }
  
  btn_CancelClk():void{
    this.router.navigate(["home"]);
  }

}
