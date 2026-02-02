import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../interface_model/product.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private apiUrl='http://localhost:8080/auth/products';
  constructor(private http: HttpClient){}
  getProducts(){
    return this.http.get<Product[]>(this.apiUrl);
   }

   addProduct(product:Product):Observable<Product>{
    return this.http.post<Product>(this.apiUrl,product);
   }

   editProduct(product:Product):Observable<Product>{
    return this.http.put<Product>(this.apiUrl,product);
   }
}
