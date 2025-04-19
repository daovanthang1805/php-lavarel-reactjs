import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css']
})
export class EditCategoryComponent implements OnInit {

  CAT_ID: any;
  category:any;

  constructor(private route: ActivatedRoute, private router: Router, private CategoryService:CategoryService) { }

  ngOnInit(): void {

    const routeParams = this.route.snapshot.paramMap;
    this.CAT_ID = Number(routeParams.get('CAT_ID'));
    console.log(this.CAT_ID);
    this.CategoryService.find(this.CAT_ID).subscribe((data:any)=>{
      this.category = data;
      console.log(this.category);
    })

  }
  update(categoryname:string, categorystatus:string){
    this.CategoryService.update(this.CAT_ID, this.category).subscribe((res)=>{
      this.router.navigateByUrl('/categoryadmin');
    })
  }

}
