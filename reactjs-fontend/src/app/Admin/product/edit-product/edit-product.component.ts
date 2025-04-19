import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CategoryService } from 'src/app/services/category.service';
import { SupplierService } from 'src/app/services/supplier.service';
import { TrademarkService } from 'src/app/services/trademark.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  suppliers:any;
  trademarks:any;
  categorys: any;
  filename: any;
  PRO_ID: any;
  product:any;

  constructor(private route: ActivatedRoute, private router: Router, private ProductService:ProductService, private category:CategoryService, private sub:SupplierService, private trade:TrademarkService) {

  }

  ngOnInit(): void {

    const routeParams = this.route.snapshot.paramMap;
    this.PRO_ID = Number(routeParams.get('PRO_ID'));
    console.log(this.PRO_ID);
    this.ProductService.find(this.PRO_ID).subscribe((data:any)=>{
      this.product = data;
      console.log(this.product);
    })
    this.showCategory();
    this.showsupplier();
    this.showtrademark();
  }
  showCategory(){
    this.categorys= this.category.listcategory().subscribe(category=>{
      this.categorys=category;
      console.log(this.categorys);
    });
  }
  showsupplier(){
    this.suppliers= this.sub.listsupplier().subscribe(supplier=>{
      this.suppliers=supplier;
      console.log(this.suppliers);
    });
  }
  showtrademark(){
    this.trademarks= this.trade.listtrademark().subscribe(trademark=>{
      this.trademarks=trademark;
      console.log(this.trademarks);
    });
  }

  update(productname:string, productprice:string, catid:string,SUB_ID:string,T_ID:string, productstatus:string, productdesc:string, productsl:string, productimage:string){
    if(confirm("Bạn có chắc muốn cập nhật không ?")){
      this.ProductService.update(this.PRO_ID, this.product).subscribe((res)=>{
        this.router.navigateByUrl('/productadmin');
      })
    }
    
  }
 


}
