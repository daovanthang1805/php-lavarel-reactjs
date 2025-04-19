import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  orders: any;
  constructor(private product: ProductService) { }

  ngOnInit(): void {
    this.showorder();
  }

  showorder(){
    this.orders= this.product.listorder().subscribe(order=>{
      this.orders=order;
      console.log(this.orders);
    });
  }


}
