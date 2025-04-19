import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
// SHARED
import { HeaderComponent } from './component/shared/header/header.component';
import { FooterComponent } from './component/shared/footer/footer.component';
import { HeaderadminComponent } from './Admin/shareadmin/headeradmin/headeradmin.component';
import { FooteradminComponent } from './Admin/shareadmin/footeradmin/footeradmin.component';
// HOME
import { HomeComponent } from './component/home/home.component';
import { DetailComponent } from './component/detail/detail.component';
import { CartComponent } from './component/cart/cart.component';
import { CheckoutComponent } from './component/checkout/checkout.component';
import { ContactComponent } from './component/contact/contact.component';
import { LoginuserComponent } from './component/loginuser/loginuser.component';
import { RegisteruserComponent } from './component/registeruser/registeruser.component';
// ADMIN
import { EmployeeadminComponent } from './Admin/employeeadmin/employeeadmin.component';
import { NewEmployeeComponent } from './Admin/new-employee/new-employee.component';
import { EditEmployeeComponent } from './Admin/edit-employee/edit-employee.component';

import { ProductadminComponent } from './Admin/product/productadmin/productadmin.component';
import { NewProductComponent } from './Admin/product/new-product/new-product.component';
import { EditProductComponent } from './Admin/product/edit-product/edit-product.component';

import { CategoryadminComponent } from './Admin/category/categoryadmin/categoryadmin.component';
import { EditCategoryComponent } from './Admin/category/edit-category/edit-category.component';
import { NewCategoryComponent } from './Admin/category/new-category/new-category.component';


import { AdminComponent } from './Admin/admin/admin.component';
import { LoginComponent } from './Admin/login/login.component';
import { UseradminComponent } from './Admin/admin/useradmin/useradmin.component';
import { RegisterComponent } from './Admin/admin/register/register.component';

import { NewTrademarkComponent } from './Admin/trademark/new-trademark/new-trademark.component';
import { TrademarkadminComponent } from './Admin/trademark/trademarkadmin/trademarkadmin.component';
import { EditTrademarkComponent } from './Admin/trademark/edit-trademark/edit-trademark.component';

import { SupplieradminComponent } from './Admin/supplier/supplieradmin/supplieradmin.component';
import { NewSupplierComponent } from './Admin/supplier/new-supplier/new-supplier.component';
import { EditSupplierComponent } from './Admin/supplier/edit-supplier/edit-supplier.component';

import { ProfileComponent } from './Admin/profile/profile.component';
import { ProductbycatComponent } from './component/productbycat/productbycat.component';
//THƯ VIỆN
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxWebstorageModule } from 'ngx-webstorage';
import { PaymentComponent } from './component/payment/payment.component';
import { ThanhcongComponent } from './component/thanhcong/thanhcong.component';
import { OrdersComponent } from './Admin/order/orders/orders.component';
import { OrderdetailComponent } from './Admin/order/orderdetail/orderdetail.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    DetailComponent,
    CartComponent,
    CheckoutComponent,
    ContactComponent,

    EmployeeadminComponent,
    NewEmployeeComponent,
    EditEmployeeComponent,
    ProductadminComponent,
    NewProductComponent,
    EditProductComponent,
    CategoryadminComponent,
    EditCategoryComponent,
    NewCategoryComponent,
    HeaderadminComponent,
    FooteradminComponent,
    AdminComponent,
    LoginComponent,

    UseradminComponent,
     RegisterComponent,
     NewTrademarkComponent,
     TrademarkadminComponent,
     EditTrademarkComponent,
     SupplieradminComponent,
     NewSupplierComponent,
     EditSupplierComponent,
     ProfileComponent,
     ProductbycatComponent,
     LoginuserComponent,
     RegisteruserComponent,
     PaymentComponent,
     ThanhcongComponent,
     OrdersComponent,
     OrderdetailComponent,

     




    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    NgxWebstorageModule,

  ],
  providers: [
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: AuthInterceptor,
    //   multi: true
    // }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
