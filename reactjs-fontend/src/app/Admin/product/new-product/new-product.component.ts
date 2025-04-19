import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SupplierService } from 'src/app/services/supplier.service';
import { TrademarkService } from 'src/app/services/trademark.service';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {
  productForm: FormGroup;
  categorys: any;
  products: any;
  suppliers: any;
  trademarks: any;

  filename: any;

  constructor(private Productservice: ProductService, private router: Router, private category:CategoryService, private supplier:SupplierService, private trademark:TrademarkService) {
    this.productForm = new FormGroup({
      productname : new FormControl(),
      productprice : new FormControl(),
      catid : new FormControl(),
      productstatus : new FormControl(),
      productdesc : new FormControl(),
      productsl : new FormControl(),
      SUB_ID : new FormControl(),
      T_ID : new FormControl(),
      productimage : new FormControl(),

    });

  }
  onsubmit(){
    if(this.productForm.invalid){
      console.log('invalid data');
      return;
    }
    const formData: FormData = new FormData();
    formData.append('ProImage', this.filename);
    formData.append('ProName',this.productForm.value.productname);
    formData.append('ProPrice', this.productForm.value.productprice);
    formData.append('CAT_ID', this.productForm.value.catid);
    formData.append('ProStatus', this.productForm.value.productstatus);
    formData.append('ProDesc', this.productForm.value.productdesc);
    formData.append('ProSl', this.productForm.value.productsl);
    formData.append('SUB_ID', this.productForm.value.SUB_ID);
    formData.append('T_ID', this.productForm.value.T_ID);

    this.Productservice.addProduct(formData).subscribe(product=>{
      console.log('success', product)
      this.productForm.reset();
      
      this.router.navigateByUrl("/productadmin");
    });

  }



  ngOnInit(): void {
    this.showCategory();
    this.showSupplier();
    this.showTrademark();
  }

  showCategory(){
    this.categorys= this.category.listcategory().subscribe(category=>{
      this.categorys=category;
      console.log(this.categorys);
    });
  }
  showSupplier(){
    this.suppliers= this.supplier.listsupplier().subscribe(supplier=>{
      this.suppliers=supplier;
      console.log(this.suppliers);
    });
  }
  showTrademark(){
    this.trademarks= this.trademark.listtrademark().subscribe(trademark=>{
      this.trademarks=trademark;
      console.log(this.trademarks);
    });
  }
  url="./assets/img/trà sữa 1.jpg"
  updateimage(ev:any){
    if(ev.target.files){
      var reader= new FileReader();
      reader.readAsDataURL(ev.target.files[0]);
      reader.onload=(event:any)=>{
        this.url = event.target.result;
      }
    }
    this.filename= ev.target.files[0];

    console.log('file name',this.filename);
  }

  // add(productname:string, productprice:string, catid:string, productstatus:string, productdesc:string,productsl:string, productimage:string){
    
  //   this.products = {
  //     'ProName': productname,
  //     'ProPrice': productprice,
  //     'CAT_ID': catid,
  //     'ProStatus': productstatus,
  //     'ProDesc': productdesc,
  //     'ProSl': productsl,
  //     'ProImage': productimage,
      
  //   };
  //   this.Productservice.addProduct(this.products as any).subscribe(product=>{
  //     this.products=product
  //   });
  //   console.log(this.products);
  //   this.router.navigateByUrl("/productadmin");
  // }
  

}