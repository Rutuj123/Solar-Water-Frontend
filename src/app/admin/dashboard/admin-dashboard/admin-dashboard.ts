import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-dashboard',
  imports: [],
  templateUrl: './admin-dashboard.html',
  styleUrl: './admin-dashboard.css',
})
export class AdminDashboard {
  constructor(private router: Router){};
logout(){
  localStorage.removeItem('token');
  this.router.navigate(['/admin/login']);
}
dashboard(){
 this.router.navigate(['/admin/dashboard']);
}
enquiries(){
  this.router.navigate(['/admin/enquiries']);
}
products(){
  this.router.navigate(['/admin/products']);
}
quotation(){
  this.router.navigate(['/admin/quotation'])
}
installation(){
  this.router.navigate(['/admin/installation'])
}
orders(){
  this.router.navigate(['/admin/orders'])
}
payment(){
  this.router.navigate(['/admin/payment'])
}

}
