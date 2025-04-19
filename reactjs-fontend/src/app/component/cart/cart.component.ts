import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NodeStyleEventEmitter } from 'rxjs/internal/observable/fromEvent';
import { ProductService } from 'src/app/services/product.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  orders: any;
  carts: any=[];
  totalquanlity: number=this.product.getcarttotalquanlity();
  totalprice: number=this.product.getcarttotalprice();
  constructor(private product: ProductService, private router: Router) { 
  }

  ngOnInit(): void {
    this.carts=this.product.GetCarts();
  }
  subtotal(cart: any){
    return cart.quantity*cart.price;
  }
  updatequanlity(idx: number, ev: any){
    let newquanlity = ev.target.value;
    newquanlity=newquanlity>0?newquanlity:1;
    ev.target.value=newquanlity
    this.carts[idx].quantity=newquanlity
    this.product.savecart(this.carts)
    this.totalquanlity=this.product.getcarttotalquanlity();
    this.totalprice=this.product.getcarttotalprice();
    // console.log(ev.target.value)
  }
  removecart(idx: number){
    Swal.fire({
      title: 'Bạn chắc chứ?',
      text: "Bạn sẽ không thể hoàn nguyên điều này!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Đồng ý!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.carts.splice(idx, 1);
        this.product.savecart(this.carts)
        Swal.fire(
          'Đã Xóa!',
          'Bạn Đã Xóa Khỏi Giỏ Hàng',
          'success'
        )
      }
    })
  }
  removeallcart(){
    Swal.fire({
      title: 'Bạn chắc chứ?',
      text: "Bạn sẽ không thể hoàn nguyên điều này!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Đồng ý!'
    }).then((result) => {
      if (result.isConfirmed) {
        sessionStorage.clear();
        this.carts=[];
        Swal.fire(
          'Đã Xóa!',
          'Bạn Đã Xóa Khỏi Giỏ Hàng',
          'success'
        )
      }
    })
  }
  

}
