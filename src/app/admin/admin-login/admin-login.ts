import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminAuthService } from '../admin-auth-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin-login',
  imports: [FormsModule,CommonModule],
  templateUrl: './admin-login.html',
  styleUrl: './admin-login.css',
})
export class AdminLogin {
email:string='';
password:string='';
constructor(private router:Router,private authService:AdminAuthService){};
login(){
  
  this.authService.login(this.email,this.password)
       .subscribe({
       next: (response)=>{
        console.log('Login success', response);
        console.log('token',response.token)
      localStorage.setItem('token',response.token);
      this.router.navigate(['/admin/dashboard']);
    },
    error:()=>alert('invalid credentials')
  });
}

}
