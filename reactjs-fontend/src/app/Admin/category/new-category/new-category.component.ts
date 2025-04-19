import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-new-category',
  templateUrl: './new-category.component.html',
  styleUrls: ['./new-category.component.css']
})
export class NewCategoryComponent implements OnInit {

  constructor(private CategoryService: CategoryService, private router: Router) { }

  categorys: any;

  ngOnInit(): void {
  }

  add(categoryname:string, categorystatus:string){
    this.categorys = {
      'CatName': categoryname,
      'CatStatus': categorystatus,
   
    };
    this.CategoryService.addCategory(this.categorys as any).subscribe(category=>{
      this.categorys=category
    });
    console.log(this.categorys);
    this.router.navigateByUrl("/categoryadmin");
  }

}
