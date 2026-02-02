import { Component, OnInit } from '@angular/core';
import { Enquiry } from '../../../interface_model/enquiry.model';
import { EnquiryService } from '../../../services/enquiry-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-enquiry-management',
  imports: [CommonModule],
  templateUrl: './enquiry-management.html',
  styleUrl: './enquiry-management.css',
})
export class EnquiryManagement implements OnInit{
enquiries:Enquiry[]=[];
constructor(private enquiryService:EnquiryService){};
ngOnInit(): void {
  this.loadEnquiries();
}

loadEnquiries(){
  this.enquiryService.getAllEnquiries().subscribe({
    next:(data)=>this.enquiries=data,
    error:(err)=>console.error(err)

  });
}
}
