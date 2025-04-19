import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  url:string = 'http://localhost/';

  constructor(private http: HttpClient) { }

  listcategory(){
    return this.http.get<any>(this.url+'laravel_api/public/api/categorys')
  }

  addCategory(category:any): Observable<any>{
    return this.http.post<any>(this.url+'laravel_api/public/api/categorys',category);
  }

  find(id:number): Observable<any>{
    return this.http.get(this.url+'laravel_api/public/api/categorys/'+id)
  }

  update(id:number, category:any): Observable<any>{
    return this.http.put(this.url+'laravel_api/public/api/categorys/'+id, category);
  }

  deleteCategory(id: any): Observable<any>{
    return this.http.delete<any>(this.url+'laravel_api/public/api/categorys/'+id);
  }

}
