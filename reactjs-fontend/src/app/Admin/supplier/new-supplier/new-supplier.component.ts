import { Component, OnInit } from '@angular/core';
import { SupplierService } from 'src/app/services/supplier.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-new-supplier',
  templateUrl: './new-supplier.component.html',
  styleUrls: ['./new-supplier.component.css']
})
export class NewSupplierComponent implements OnInit {

  suppliers: any;

  constructor(private Supplier: SupplierService, private router: Router) { }

  ngOnInit(): void {
  }

  add(Suppliername:string, Supplierphone:string, Supplieremail:string, Supplierdesc:string){
    this.suppliers = {
      'SUB_Name': Suppliername,
      'SUB_Phone': Supplierphone,
      'SUB_Email': Supplieremail,
      'SUB_desc': Supplierdesc
    };
    this.Supplier.addSupplier(this.suppliers as any).subscribe(supplier=>{
      this.suppliers=supplier
    });
    console.log(this.suppliers);
    this.router.navigateByUrl("/supplieradmin");
  }

}
