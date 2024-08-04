import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IDepartment } from '../../Models/IDepartment';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

HostURl:string="http://localhost:20651";
DeptWebAPIPath:string="/api/DeptWebAPI/";

  constructor(private httpserver:HttpClient) { }

  getAllDepartments():Observable<IDepartment[]>{
 return this.httpserver.get<IDepartment[]>(this.HostURl+this.DeptWebAPIPath+"AllDepartment");
  }
}
