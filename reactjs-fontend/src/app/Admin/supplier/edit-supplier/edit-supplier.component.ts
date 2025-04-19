import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SupplierService } from 'src/app/services/supplier.service';

@Component({
  selector: 'app-edit-supplier',
  templateUrl: './edit-supplier.component.html',
  styleUrls: ['./edit-supplier.component.css']
})
export class EditSupplierComponent implements OnInit {

  SUB_ID: any;
  supplier:any;

  constructor(private route: ActivatedRoute, private router: Router, private Supplier:SupplierService) { }

  ngOnInit(): void {

    const routeParams = this.route.snapshot.paramMap;
    this.SUB_ID = Number(routeParams.get('SUB_ID'));
    console.log(this.SUB_ID);
    this.Supplier.find(this.SUB_ID).subscribe((data:any)=>{
      this.supplier = data;
      console.log(this.supplier);
    })
  }

  update(Suppliername:string, Supplierphone:string, Supplieremail:string, Supplierdesc:string){
    if(confirm("Bạn có chắc muốn sửa không ?")){
      this.Supplier.update(this.SUB_ID, this.supplier).subscribe((res)=>{
        this.router.navigateByUrl('/supplieradmin');
      })
    }
  }

}
