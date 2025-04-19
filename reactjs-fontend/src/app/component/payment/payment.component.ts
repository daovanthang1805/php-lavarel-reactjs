import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  cartform: FormGroup;
  donhangs: any;
  user: any=localStorage.getItem('user')
  carts: any=[];
  totalquanlity: number=this.product.getcarttotalquanlity();
  totalprice: number=this.product.getcarttotalprice();
  constructor(private product: ProductService, private router: Router) {
    this.cartform = new FormGroup({
      order_price: new FormControl(this.totalprice),
      KHNAME: new FormControl(),
      KHTUOI: new FormControl(),
      KHGT: new FormControl(),
      KHEMAIL: new FormControl(),
      KHDC: new FormControl(),
      KHPHONE: new FormControl(),
      order_product_list: new FormControl(this.products)


    });
   }

  ngOnInit(): void {
    this.carts=this.product.GetCarts();

  }
  get products(){
    return this.carts=this.product.GetCarts();
  }
  subtotal(cart: any){
    return cart.quantity*cart.price;
  }
  adddonhang(){

    console.log("order_price", this.cartform.value.order_price)
    console.log("order_product_list", this.cartform.value.order_product_list)

    this.product.payment(this.cartform.value ).subscribe((data: any)=>{
      console.log('success', data)
      sessionStorage.clear();
      this.router.navigateByUrl("/thanhcong");
    });

  }

}
