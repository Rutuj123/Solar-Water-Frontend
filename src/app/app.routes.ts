import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Problem } from './problem/problem';
import { Solution } from './solution/solution';
import { Contact } from './contact/contact';
import { ProductListComponent } from './product-list-component/product-list-component';

export const routes: Routes = [
    {path:'',component:Home},
    {path:'problem',component:Problem},
    {path:'solution',component:Solution},
    {path:'contact',component:Contact},
    {path:'products',component:ProductListComponent},
    {path:'admin',loadChildren:()=>import('./admin/admin.routes').then(m=>m.ADMIN_ROUTES)}
];
