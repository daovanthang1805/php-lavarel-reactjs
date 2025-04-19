import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-orderdetail',
  templateUrl: './orderdetail.component.html',
  styleUrls: ['./orderdetail.component.css']
})
export class OrderdetailComponent implements OnInit {
  orderid: any;
  orderdetail:any;
  orderkhachhang: any;

  constructor(private product: ProductService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    this.orderid = Number(routeParams.get('ORDERID'));
    console.log(this.orderid);
    this.product.showorderdetail(this.orderid).subscribe((data:any)=>{
      this.orderdetail = data;
      console.log(this.orderdetail);
    })
    this.product.showkhachhang(this.orderid).subscribe((data:any)=>{
      this.orderkhachhang = data;
      console.log(this.orderkhachhang);
    })
    
  }


}
