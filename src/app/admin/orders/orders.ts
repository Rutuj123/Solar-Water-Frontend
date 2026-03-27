import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EnquiryService } from '../../services/enquiry-service';
import { QuotationService } from '../quotation-service';

@Component({
  selector: 'app-orders',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './orders.html',
  styleUrl: './orders.css',
})
export class Orders {
  enquiryId!: number;
  quotationId!: number;
  orders: any[] = [];
  showModal = false;

  entries: any[]=[];
  quotations: any[]=[];
  orderForm!: FormGroup;

  constructor(private http: HttpClient,private enquiryService: EnquiryService,
    private quotationService: QuotationService
  ) {
    this.loadOrders();
  }
openAddModal(){
  this.showModal=true;
}
closeModal(){
  this.showModal=false;
}
 loadEntries() {
    this.enquiryService.getAllEnquiries().subscribe(data=>{
      this.entries = data;
    });
  }

  loadQuotations() {
    this.quotationService.getAllQuotations().subscribe(data=>{
      this.quotations=data;
    });
  }
  createOrder() {
    this.http.post(
      `http://localhost:8080/api/orders/create?enquiryId=${this.enquiryId}&quotationId=${this.quotationId}`,
      {}
    ).subscribe(() => {
      alert("Order Created Successfully");
      this.loadOrders();
    });
  }


  loadOrders() {
    this.http.get<any[]>('http://localhost:8080/api/orders')
      .subscribe(data => this.orders = data);
  }
}
