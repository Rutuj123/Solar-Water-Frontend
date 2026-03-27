import { Route, Routes } from "@angular/router";
import { Home } from "../home/home";
import { AdminLogin } from "./admin-login/admin-login";
import { AdminDashboard } from "./dashboard/admin-dashboard/admin-dashboard";
import { EnquiryManagement } from "./enquiries/enquiry-management/enquiry-management";
import { ProductManagement } from "./products/product-management/product-management";
import { Quotation } from "./quotation/quotation";
import { InstallationsComponent } from "./installations/installations";
import { Orders } from "./orders/orders";
import { Payments } from "./payments/payments";
import { adminGuard } from "../guards/admin-guard";

export const ADMIN_ROUTES: Routes=[
   {path:'login',component:AdminLogin},
   {path:'dashboard',component:AdminDashboard,canActivate:[adminGuard]},
   {path:'enquiries',component:EnquiryManagement},
   {path:'products',component:ProductManagement},
   {path:'quotation',component:Quotation},
    {path:'installation',component:InstallationsComponent},
     {path:'orders',component:Orders},
      {path:'payment',component:Payments}

     
];