import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  url:string = 'http://localhost/';
  

  constructor(private http: HttpClient) { 
  }

  

  listproduct(){
    return this.http.get<any>(this.url+'laravel_api/public/api/products');
  }
  getbyid(id:number): Observable<any>{
    return this.http.get(this.url+'laravel_api/public/api/productbycat/'+id)
  }

  addProduct(product:any): Observable<any>{
    return this.http.post<any>(this.url+'laravel_api/public/api/products',product);
  }

  find(id:number): Observable<any>{
    return this.http.get(this.url+'laravel_api/public/api/products/'+id)
  }

  update(id:number, product:any): Observable<any>{
    return this.http.put(this.url+'laravel_api/public/api/products/'+id, product);
  }

  deleteProduct(id: any): Observable<any>{
    return this.http.delete<any>(this.url+'laravel_api/public/api/products/'+id);
  }
  searchProduct(name:any): Observable<any>{
    return this.http.get(this.url+'laravel_api/public/api/products/search'+name)
  }
  producthot(){
    return this.http.get<any>(this.url+'laravel_api/public/api/producthot');
  }


  GetCarts(){
    let cartJson=sessionStorage.getItem('cart');
    if(cartJson){
      return JSON.parse(cartJson);
    }else{
      return [];
    }
  }
  savecart(carts:any){
    let cartJson=JSON.stringify(carts);
    sessionStorage.setItem('cart', cartJson);
  }
  getcarttotalprice(){
    let carts = this.GetCarts();
    let total: number = 0;
    carts.forEach((item: any) => {
      total += item.quantity * item.price;
    });

    return total;
  }
  getcarttotalquanlity(){
    let cartss = this.GetCarts();
    let totals: number = 0;
    cartss.forEach((item: any) => {
      totals += item.quantity * 1;
    });

    return totals;
  }
  payment(data: any): Observable<any>{
    return this.http.post<any>(this.url+'laravel_api/public/api/orders',data);
  }
  listorder(){
    return this.http.get<any>(this.url+'laravel_api/public/api/order');
  }
  showorderdetail(id:number){
    return this.http.get<any>(this.url+'laravel_api/public/api/orderdetail/'+id);
  }
  showkhachhang(id:number){
    return this.http.get<any>(this.url+'laravel_api/public/api/khachhang/'+id);
  }
}
