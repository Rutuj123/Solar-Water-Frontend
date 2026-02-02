import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product-service';
import { Product } from '../interface_model/product.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-list-component',
  imports: [CommonModule],
  templateUrl: './product-list-component.html',
  styleUrl: './product-list-component.css',
})
export class ProductListComponent implements OnInit{
products:Product[]=[];
constructor(private productService: ProductService){} 
getToken():string | null{
  return localStorage.getItem('token');
}
getUserRole():string | null{
const token=this.getToken();
if(!token) return null;
const payload=token.split('.')[1];
const decoded=JSON.parse(atob(payload));
return decoded.role || null;
}
get isAdmin():boolean{
  console.log(this.getUserRole());
  return this.getUserRole() ==='ADMIN';
}
ngOnInit(): void {
  this.productService.getProducts().subscribe(data=>this.products=data);
}

}
