import { Route, Routes } from "@angular/router";
import { Home } from "../home/home";
import { AdminLogin } from "./admin-login/admin-login";
import { AdminDashboard } from "./dashboard/admin-dashboard/admin-dashboard";
import { EnquiryManagement } from "./enquiries/enquiry-management/enquiry-management";
import { ProductManagement } from "./products/product-management/product-management";

export const ADMIN_ROUTES: Routes=[
   {path:'login',component:AdminLogin},
   {path:'dashboard',component:AdminDashboard},
   {path:'enquiries',component:EnquiryManagement},
   {path:'products',component:ProductManagement}
];