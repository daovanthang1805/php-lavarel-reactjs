import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { CategoryService } from 'src/app/services/category.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-productbycat',
  templateUrl: './productbycat.component.html',
  styleUrls: ['./productbycat.component.css']
})
export class ProductbycatComponent implements OnInit {
  cart: any= this.product.GetCarts();
  id: any= this.activedrouter.snapshot.paramMap.get('id');
  category: any;
  products: any;
  searchtext: any;
  page: number=1;
  count: number=0;
  tablesize: number=8;
  tablesizes: any=[3, 6, 9, 12];

  constructor(private activedrouter: ActivatedRoute, private product:ProductService, private cate:CategoryService) { }

  ngOnInit(): void {
    console.log(this.id);
    this.cate.find(this.id).subscribe((data:any)=>{
      this.category = data;
      console.log(this.category);
    })
    this.showProduct();
    this.showCategory();
  }
  onaddtocart(products:any){
    let idx=this.cart.findIndex((item:any)=>{
      return item.id==products.PRO_ID
    });
    if(idx>=0){
      this.cart[idx].quanlity +=1;
    }else{
      let cartitem: any={
        id: products.PRO_ID,
        name: products.ProName,
        price: products.ProPrice,
        quanlity:1,
        subtotal: function(){
          return this.price*this.quanlity;
        }
      }
      this.cart.push(cartitem)
    }

    this.product.savecart(this.cart)
    Swal.fire({
      title: 'Thêm vào giỏ hàng thành công',
      icon: 'success'
    });
  }

  ontabledatachange(event: any){
    this.page=event;
    this.showProduct();
  }
  ontablesizechange(event: any): void{
    this.tablesize= event.target.value;
    this.page=1;
    this.showProduct();
  }

  showProduct(){
    this.products= this.product.getbyid(this.id).subscribe(product=>{
      this.products=product;
      console.log(this.products);
    });
  }
  showCategory(){
    this.category= this.cate.listcategory().subscribe(categorys=>{
      this.category=categorys;
      console.log(this.category);
    });
  }

}
