import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IEmployee } from '../../Models/IEmployee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  HostURL:string="http://localhost:20651";
  EmpWebAPIPath:string="/api/EmpWebAPI/";


  constructor(private httpserver:HttpClient) { }


  getAllEmployees():Observable<IEmployee[]>{ //Using Array to get All Data
return this.httpserver.get<IEmployee[]>(this.HostURL+this.EmpWebAPIPath+"AllEmployees");
  }

  
  getEmployeeId(empId:number):Observable<IEmployee>{
   return this.httpserver.get<IEmployee>(this.HostURL+this.EmpWebAPIPath+"GetEmpById?EmpId="+empId);
  }


  InsertEmployee(emp:IEmployee):Observable<number>{
  return  this.httpserver.post<number>(this.HostURL+this.EmpWebAPIPath+"InsertEmployee",emp);
  }
  
  UpdateEmployee(emp:IEmployee):Observable<number>{
   return this.httpserver.put<number>(this.HostURL+this.EmpWebAPIPath+"UpdateEmployee",emp);
  }

  DeleteEmployee(emp:number):Observable<IEmployee>{
   return this.httpserver.delete<IEmployee>(this.HostURL+this.EmpWebAPIPath+"DeleteEmployee?EmpId="+emp);
  }

}
