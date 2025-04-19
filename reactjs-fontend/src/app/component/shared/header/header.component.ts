import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  user: any=localStorage.getItem('user')

  carts: any=[]

  categorys: any;
  totalquanlity: number=this.pro.getcarttotalquanlity();

  constructor(private category: CategoryService, private pro: ProductService, private router: Router, private auth: AuthService) { }

  ngOnInit(): void {
    this.carts=this.pro.GetCarts();

    
    this.showCategory();
  }


  showCategory(){
    this.categorys= this.category.listcategory().subscribe(category=>{
      this.categorys=category;
      console.log(this.categorys);
    });
  }
  logout(){
    localStorage.clear();
    sessionStorage.clear();
    this.router.navigate(['loginuser']);
  }

}
