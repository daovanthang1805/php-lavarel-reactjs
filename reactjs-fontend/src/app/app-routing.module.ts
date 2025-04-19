import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//HOME
import { HomeComponent } from './component/home/home.component';
import { DetailComponent } from './component/detail/detail.component';
import { CartComponent } from './component/cart/cart.component';
import { CheckoutComponent } from './component/checkout/checkout.component';
import { ContactComponent } from './component/contact/contact.component';
import { ProductbycatComponent } from './component/productbycat/productbycat.component';
import { LoginuserComponent } from './component/loginuser/loginuser.component';
import { RegisteruserComponent } from './component/registeruser/registeruser.component';
//EMPLOYEE
import { EmployeeadminComponent } from './Admin/employeeadmin/employeeadmin.component';
import { NewEmployeeComponent } from './Admin/new-employee/new-employee.component';
import { EditEmployeeComponent } from './Admin/edit-employee/edit-employee.component';
// PRODUCT
import { ProductadminComponent } from './Admin/product/productadmin/productadmin.component';
import { NewProductComponent } from './Admin/product/new-product/new-product.component';
import { EditProductComponent } from './Admin/product/edit-product/edit-product.component';
// CATEGORY
import { CategoryadminComponent } from './Admin/category/categoryadmin/categoryadmin.component';
import { EditCategoryComponent } from './Admin/category/edit-category/edit-category.component';
import { NewCategoryComponent } from './Admin/category/new-category/new-category.component';
// ADMIN
import { AdminComponent } from './Admin/admin/admin.component';
import { LoginComponent } from './Admin/login/login.component';
import { IsAuthenticatedGuard } from './services/is-authenticated.guard';
import { UseradminComponent } from './Admin/admin/useradmin/useradmin.component';
import { RegisterComponent } from './Admin/admin/register/register.component';
// TRADEMARK
import { TrademarkadminComponent } from './Admin/trademark/trademarkadmin/trademarkadmin.component';
import { NewTrademarkComponent } from './Admin/trademark/new-trademark/new-trademark.component';
import { EditTrademarkComponent } from './Admin/trademark/edit-trademark/edit-trademark.component';
// SUPPLIER
import { SupplieradminComponent } from './Admin/supplier/supplieradmin/supplieradmin.component';
import { NewSupplierComponent } from './Admin/supplier/new-supplier/new-supplier.component';
import { EditSupplierComponent } from './Admin/supplier/edit-supplier/edit-supplier.component';
// USER
import { ProfileComponent } from './Admin/profile/profile.component';
import { PaymentComponent } from './component/payment/payment.component';
import { ThanhcongComponent } from './component/thanhcong/thanhcong.component';
import { OrdersComponent } from './Admin/order/orders/orders.component';
import { OrderdetailComponent } from './Admin/order/orderdetail/orderdetail.component';



const routes: Routes = [
  //HOME
  {path:'', component:HomeComponent},
  {path:'thanhcong', component:ThanhcongComponent},

  
  {path:'detail/:PRO_ID', component:DetailComponent},
  {path:'cart', component:CartComponent},
  {path:'payment', component:PaymentComponent},
  {path:'checkout', component:CheckoutComponent},
  {path:'contact', component:ContactComponent},
  {path:'productbycat/:id', component:ProductbycatComponent},
  {path:'loginuser', component:LoginuserComponent},
  {path:'registeruser', component:RegisteruserComponent},
  //EMPLOYEE
  {path:'employadmin', component:EmployeeadminComponent, canActivate: [IsAuthenticatedGuard]},
  {path:'addemployee', component:NewEmployeeComponent, canActivate: [IsAuthenticatedGuard]},
  {path:'editemployee/:EMP_ID', component:EditEmployeeComponent, canActivate: [IsAuthenticatedGuard]},
  // PRODUCT
  {path:'productadmin', component:ProductadminComponent, canActivate: [IsAuthenticatedGuard]},
  {path:'addproduct', component:NewProductComponent, canActivate: [IsAuthenticatedGuard]},
  {path:'editproduct/:PRO_ID', component:EditProductComponent, canActivate: [IsAuthenticatedGuard]},
  // CATEGORY
  {path:'categoryadmin', component:CategoryadminComponent, canActivate: [IsAuthenticatedGuard]},
  {path:'editcategory/:CAT_ID', component:EditCategoryComponent, canActivate: [IsAuthenticatedGuard]},
  {path:'addcategory', component:NewCategoryComponent, canActivate: [IsAuthenticatedGuard]},
  // ADMIN
  {path:'admin', component:AdminComponent, canActivate: [IsAuthenticatedGuard]},
  {path:'useradmin', component:UseradminComponent, canActivate: [IsAuthenticatedGuard]},
  {path:'login', component:LoginComponent},
  {path:'register', component:RegisterComponent},
  {path:'profile', component:ProfileComponent, canActivate: [IsAuthenticatedGuard]},
  //TRADEMARK
  {path:'trademarkadmin', component:TrademarkadminComponent, canActivate: [IsAuthenticatedGuard]},
  {path:'addtrademark', component:NewTrademarkComponent, canActivate: [IsAuthenticatedGuard]},
  {path:'edittrademark/:T_ID', component:EditTrademarkComponent, canActivate: [IsAuthenticatedGuard]},
  //SUPPLIER
  {path:'supplieradmin', component:SupplieradminComponent, canActivate: [IsAuthenticatedGuard]},
  {path:'addsupplier', component:NewSupplierComponent, canActivate: [IsAuthenticatedGuard]},
  {path:'editsupplier/:SUB_ID', component:EditSupplierComponent, canActivate: [IsAuthenticatedGuard]},
  //order
  {path:'order', component:OrdersComponent, canActivate: [IsAuthenticatedGuard]},
  {path:'orderdetail/:ORDERID', component:OrderdetailComponent, canActivate: [IsAuthenticatedGuard]},
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
