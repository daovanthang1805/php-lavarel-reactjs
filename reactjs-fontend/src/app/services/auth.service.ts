import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { ApiService } from './api.service';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  users: any;

 

  private _isLoggedIn$ = new BehaviorSubject<boolean>(false);
  private readonly TOKEN_NAME = 'đào văn thắng';
  isLoggedIn$ = this._isLoggedIn$.asObservable();

  get token(): any {
    return localStorage.getItem(this.TOKEN_NAME);
  }
  

  constructor(private apiService: ApiService) {
    this._isLoggedIn$.next(!!this.token);
    
   }

   login(email: any, password: any) {
    
    return this.apiService.login(email, password).pipe(
      tap((response: any) => {
        this._isLoggedIn$.next(true);
        this.users=response.user.name;

        localStorage.setItem('user', this.users);

        localStorage.setItem(this.TOKEN_NAME, response.token);

      })
    );
  }
  // getuser() {
  //   return this.apiService.listuser().pipe(
  //     tap((response: any) => {
  //       this._isLoggedIn$.next(true);
  //       localStorage.getItem(this.TOKEN_NAME)
        
  //     })
  //   );
  // }
}


