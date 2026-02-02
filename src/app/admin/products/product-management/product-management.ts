import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../services/product-service';
import { Product } from '../../../interface_model/product.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { errorContext } from 'rxjs/internal/util/errorContext';

@Component({
  selector: 'app-product-management',
  imports: [CommonModule,FormsModule],
  templateUrl: './product-management.html',
  styleUrl: './product-management.css',
})
export class ProductManagement implements OnInit{
products:Product[]=[];
showModal = false;
showEditModal=false;
product: Product={
  id:0,
  name:'',
  price: 0,
  description:'',
  capacityLph:0,
  filtrationType:'',
  solarSupported:'false',
  status:'ACTIVE'
}
constructor(private productService: ProductService){} 
openAddModal(){
  this.showModal=true;
}
closeModal(){
  this.showModal=false;
}
closEditeModal(){
  this.showEditModal=false;
}
selectedProduct!: Product;
openEditModal(product:Product){
  this.selectedProduct={...product};//clone object
  this.showEditModal=true;
}
/* getToken():string | null{
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
} */
ngOnInit(): void {
  this.productService.getProducts().subscribe(data=>this.products=data);
}

submitProduct(){
this.productService.addProduct(this.product).subscribe({
  next:()=>{
    alert("Product added successfully..");
    this.closeModal();
  },
  error: err=>{
    console.log(err);
    alert("Failed to add product  ");
  }
});
}
submitEditProduct(){
  this.productService.editProduct(this.product).subscribe({
    next:()=>{
      alert("Product edited successfully");
      this.closEditeModal();
    },
    error: err=>{
      console.log(err);
       alert("Failed to edit product  ");
    }
  })
}
}
