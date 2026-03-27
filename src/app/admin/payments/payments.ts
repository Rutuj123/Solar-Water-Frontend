import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { PaymentService } from '../payment-service';

@Component({
  selector: 'app-payments',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './payments.html',
  styleUrl: './payments.css',
})
export class Payments {
 paymentForm: FormGroup;
 payments: any[] = [];

  constructor(private fb: FormBuilder, private http: HttpClient,private paymentService:PaymentService) {
    this.paymentForm = this.fb.group({
      amount: [''],
      paymentDate: [''],
      paymentMode: ['CASH'],
      transactionId: [''],
      status: ['PARTIAL'],
      order: this.fb.group({
        id: ['']
      })
    });
  }
openEditModal(){

}

  savePayment() {
    this.http.post('http://localhost:8080/api/payments', this.paymentForm.value)
      .subscribe(() => {
        alert("Payment Saved Successfully");
        this.paymentForm.reset();
      });
  }

  deletePayment(id: number){
   if(!confirm('Are you sure you want to delete this payment?')){
    return;
   }
   this.paymentService.deletePayment(id).subscribe({
    next:() =>{
      alert('Payment Deleted Successfully!');
    },
    error:(err)=>{
      console.error(err);
    }
     })
    }

    loadAllPayments(){
      this.paymentService.loadAllPayments().subscribe({
        next: (data:any) =>{
          this.payments=data;
        },
        error: (err)=>{
          console.error(err);
        }
      })
    }


}
