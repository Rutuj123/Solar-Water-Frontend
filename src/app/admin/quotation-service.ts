import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class QuotationService {
  private apiUrl= 'http://localhost:8080/api/quotations';

  constructor(private http: HttpClient) {}
  fid:number=89;

  saveQuotation(data: any): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }
  updateQuotation(id: number, data: any) {
  return this.http.put(`http://localhost:8080/api/quotations/${id}`, data);
}

deleteQuotation(id: number) {
  return this.http.delete(`http://localhost:8080/api/quotations/${id}`);
}

getAllQuotations(): Observable<any> {
  return this.http.get(this.apiUrl);
}
}
