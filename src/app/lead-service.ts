import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Lead } from './interface_model/lead.model';

@Injectable({
  providedIn: 'root',
})
export class LeadService {
  private apiurl='http://localhost:8080/api/leads';
  constructor(private http:HttpClient){}
  createLead(lead:Lead){
   return this.http.post(this.apiurl,lead);
  }
}
