import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AdminAuthService {
  private baseUrl = 'http://localhost:8080/auth/login';
  constructor(private http: HttpClient){};
  login(username:string,password:string): Observable<any>{
    console.log("this.email   "+username);
  console.log("this.password   "+password);
    const body={
      username: username,
      password: password
    };
    return this.http.post(`${this.baseUrl}`,body);
  };

  logout(){
    localStorage.removeItem('token');
  };
}
