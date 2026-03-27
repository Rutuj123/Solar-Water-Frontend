import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PaymentService {
  private apiUrl='http://localhost:8080/api/payments';
  constructor(private http: HttpClient){}

  savePayment(data:any):Observable<any>{
    return this.http.post(this.apiUrl,data);
  }
  deletePayment(id:number){
    return this.http.delete(this.apiUrl+`${id}`);
  }

  loadAllPayments(){
      return this.http.get(this.apiUrl);
  }
}
