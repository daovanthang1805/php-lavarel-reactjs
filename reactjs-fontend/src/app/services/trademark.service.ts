import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TrademarkService {
  url:string = 'http://localhost/';

  constructor(private http: HttpClient) { }

  listtrademark(){
    return this.http.get<any>(this.url+'laravel_api/public/api/trademarks')
  }

  addTrademark(trademark:any): Observable<any>{
    return this.http.post<any>(this.url+'laravel_api/public/api/trademarks',trademark);
  }

  find(id:number): Observable<any>{
    return this.http.get(this.url+'laravel_api/public/api/trademarks/'+id)
  }

  update(id:number, trademark:any): Observable<any>{
    return this.http.put(this.url+'laravel_api/public/api/trademarks/'+id, trademark);
  }

  deleteTrademark(id: any): Observable<any>{
    return this.http.delete<any>(this.url+'laravel_api/public/api/trademarks/'+id);
  }
}
