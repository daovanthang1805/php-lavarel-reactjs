import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { CategoryService } from 'src/app/services/category.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user: any=localStorage.getItem('user')

  cart: any= this.product.GetCarts();
  totalquanlity: number=this.pro.getcarttotalquanlity();

  constructor(private product:ProductService,private router: Router, private cate:CategoryService, private pro:ProductService, private auth: AuthService) { }

  searchtext: any;
  products: any;
  producthots: any;
  category: any;
  page: number=1;
  count: number=0;
  tablesize: number=8;
  tablesizes: any=[3, 6, 9, 12];
  ngOnInit(): void {

    this.showProduct();
    this.producthot();
  }
  onaddtocart(products:any){
    let idx=this.cart.findIndex((item:any)=>{
      return item.id==products.PRO_ID
    });
    if(idx>=0){
      this.cart[idx].quantity +=1;
    }else{
      let cartitem: any={
        id: products.PRO_ID,
        name: products.ProName,
        price: products.ProPrice,
        image: products.ProImage,
        quantity:1,
        subtotal: function(){
          return this.price*this.quantity;
        }
      }
      this.cart.push(cartitem)
    }

    this.product.savecart(this.cart)
    Swal.fire({
      title: 'Thêm vào giỏ hàng thành công',
      icon: 'success'
    });
    this.totalquanlity=this.pro.getcarttotalquanlity();
  }

  ontabledatachange(event: any){
    this.page=event;
    this.showProduct();

  }
  ontabledatachangehot(event: any){
    this.page=event;

    this.producthot();
  }
  ontablesizechange(event: any): void{
    this.tablesize= event.target.value;
    this.page=1;
    this.showProduct();

  }
  ontablesizechangehot(event: any): void{
    this.tablesize= event.target.value;
    this.page=1;

    this.producthot();
  }

  showProduct(){
    this.products= this.product.listproduct().subscribe(product=>{
      this.products=product;
      console.log(this.products);
    });
  }
  producthot(){
    this.producthots= this.product.producthot().subscribe(product=>{
      this.producthots=product;
      console.log(this.producthots);
    });
  }
  showCategory(){
    this.category= this.cate.listcategory().subscribe(categorys=>{
      this.category=categorys;
      console.log(this.category);
    });
  }
  
}
