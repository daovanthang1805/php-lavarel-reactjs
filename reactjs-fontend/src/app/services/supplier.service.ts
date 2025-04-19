import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SupplierService {

  url:string = 'http://localhost/';
  constructor(private http: HttpClient) { }

  listsupplier(){
    return this.http.get<any>(this.url+'laravel_api/public/api/suppliers')
  }

  addSupplier(supplier:any): Observable<any>{
    return this.http.post<any>(this.url+'laravel_api/public/api/suppliers',supplier);
  }

  find(id:number): Observable<any>{
    return this.http.get(this.url+'laravel_api/public/api/suppliers/'+id)
  }

  update(id:number, supplier:any): Observable<any>{
    return this.http.put(this.url+'laravel_api/public/api/suppliers/'+id, supplier);
  }

  deleteSupplier(id: any): Observable<any>{
    return this.http.delete<any>(this.url+'laravel_api/public/api/suppliers/'+id);
  }
}
