import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  url:string = 'http://localhost/';

  constructor(private http: HttpClient) { }

  listemployee(){
    return this.http.get<any>(this.url+'laravel_api/public/api/employees')
  }

  

  addEmployee(employee:any): Observable<any>{
    return this.http.post<any>(this.url+'laravel_api/public/api/employees',employee);
  }

  find(id:number): Observable<any>{
    return this.http.get(this.url+'laravel_api/public/api/employees/'+id)
  }

  update(id:number, employee:any): Observable<any>{
    return this.http.put(this.url+'laravel_api/public/api/employees/'+id, employee);
  }

  deleteEmployee(id: any): Observable<any>{
    return this.http.delete<any>(this.url+'laravel_api/public/api/employees/'+id);
  }
}
