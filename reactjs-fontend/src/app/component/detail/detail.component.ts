import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  PRO_ID: any;
  product:any;
  constructor(private route: ActivatedRoute, private router: Router, private ProductService:ProductService) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    this.PRO_ID = Number(routeParams.get('PRO_ID'));
    console.log(this.PRO_ID);
    this.ProductService.find(this.PRO_ID).subscribe((data:any)=>{
      this.product = data;
      console.log(this.product);
    })
  }

}
