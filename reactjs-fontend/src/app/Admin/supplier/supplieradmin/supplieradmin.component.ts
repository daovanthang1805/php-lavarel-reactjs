import { Component, OnInit } from '@angular/core';
import { SupplierService } from 'src/app/services/supplier.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-supplieradmin',
  templateUrl: './supplieradmin.component.html',
  styleUrls: ['./supplieradmin.component.css']
})
export class SupplieradminComponent implements OnInit {

  suppliers: any;
  constructor(private supplier:SupplierService,private router: Router) { }

  ngOnInit(): void {
    this.showSupplier();
  }

  showSupplier(){
    this.suppliers= this.supplier.listsupplier().subscribe(supplier=>{
      this.suppliers=supplier;
      console.log(this.suppliers);
    });
  }

  deleteSupplier(id:any){
    if(confirm("Bạn có chắc muốn xóa không ?")){
      this.supplier.deleteSupplier(id).subscribe(
        res=>{
          this.suppliers= this.suppliers.filter((a:any) => a.SUB_ID==id);
          this.showSupplier();
        }
      );
      this.router.navigateByUrl("/supplieradmin");
    }
  }

}
