import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { IsAuthenticatedGuard } from './is-authenticated.guard';

import { Token } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url:string = 'http://localhost/';

  constructor(private http: HttpClient) { }

  login(email: string, password: string) {
    return this.http.post('http://localhost/laravel_api/public/api/login', { email, password });
  }

  listuser(){
    return this.http.get(this.url+'laravel_api/public/api/user')
  }

  register(user:any):Observable<any>{
    return this.http.post(this.url+'laravel_api/public/api/register',user)
  }


  deleteUser(id: any): Observable<any>{
    return this.http.delete<any>(this.url+'laravel_api/public/api/users/'+id);
  }




}
