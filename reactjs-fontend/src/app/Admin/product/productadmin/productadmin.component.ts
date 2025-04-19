import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-productadmin',
  templateUrl: './productadmin.component.html',
  styleUrls: ['./productadmin.component.css']
})
export class ProductadminComponent implements OnInit {

  searchtext: any;
  page: number=1;
  count: number=0;
  tablesize: number=4;
  tablesizes: any=[3, 6, 9, 12];
  letterLimit = 3;

  constructor(private product:ProductService,private router: Router, private category:CategoryService, private apiService: ApiService) { }
  users: any;
  userss: any[]=[];
  categorys: any;
  products: any;
  ngOnInit(): void {
    this.showProduct();

 
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
    this.products= this.product.listproduct().subscribe(product=>{
      this.products=product;

      console.log(this.products);
    });
  }

  showCategory(){
    this.categorys= this.category.listcategory().subscribe(category=>{
      this.categorys=category;
      console.log(this.categorys);
    });
  }

  deleteProduct(id:any){
    if(confirm("Bạn có chắc muốn xóa không ?")){
      this.product.deleteProduct(id).subscribe(
        res=>{
          this.products= this.products.filter((a:any) => a.PRO_ID==id);
          this.showProduct();
        }
      );
      this.router.navigateByUrl("/productadmin");
    }
    
  }
  

}
