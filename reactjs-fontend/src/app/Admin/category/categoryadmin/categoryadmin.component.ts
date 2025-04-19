import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-categoryadmin',
  templateUrl: './categoryadmin.component.html',
  styleUrls: ['./categoryadmin.component.css']
})
export class CategoryadminComponent implements OnInit {

  constructor(private category:CategoryService,private router: Router) { }

  categorys: any;

  ngOnInit(): void {
    this.showCategory();

  }
  showCategory(){
    this.categorys= this.category.listcategory().subscribe(category=>{
      this.categorys=category;
      console.log(this.categorys);
    });
  }
  deleteCategory(id:any){
    this.category.deleteCategory(id).subscribe(
      res=>{
        this.categorys= this.categorys.filter((a:any) => a.CAT_ID==id);
        this.showCategory();
      }
    );
    this.router.navigateByUrl("/categoryadmin");
  }

}
