import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Enquiry } from '../interface_model/enquiry.model';


@Injectable({
  providedIn: 'root',
})
export class EnquiryService {
  private apiUrl="http://localhost:8080/auth/getAllLeads";
  constructor(private http: HttpClient){}
  getAllEnquiries(): Observable<Enquiry[]>{
       return this.http.get<Enquiry[]>(this.apiUrl);
  }
}
