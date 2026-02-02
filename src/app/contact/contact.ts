import { Component } from '@angular/core';
import { LeadService } from '../lead-service';
import { Lead } from '../interface_model/lead.model';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  lead: Lead={
    name: '',
    phone: '',
    email: '',
    location: '',
    requirement:'',
    status:'contacted'
  }
constructor(private leadService: LeadService){}
submitLead(){
  this.leadService.createLead(this.lead).subscribe({
    next:()=>{
    alert("lead submitted successfully");
    this.lead = {
    name: '',
    phone: '',
    email: '',
    location: '',
    requirement:'',
    status:'contacted'
      };

      // ✅ reset form state (touched, dirty, validation)
      //form.resetForm();
    },
    error:()=>{
      alert("Error while submitting lead");
    }
  });
}
}
