import { HttpErrorResponse, HttpInterceptorFn } from "@angular/common/http";
import { inject } from "@angular/core";
import { Router } from "@angular/router";
import { catchError, throwError } from "rxjs";

export const jwtInterceptor: HttpInterceptorFn = (req, next) => {
console.log("Interceptor running...");
const router=inject(Router);
  // 1. Get token from storage
  const token = localStorage.getItem('token');

  // 2. If token exists, clone request and add header
  if (token) {
    const authReq = req.clone({
      setHeaders: {
       Authorization: `Bearer ${token}`
      }

    });

    // 3. Send modified request
    return next(authReq).pipe(
      catchError((error: HttpErrorResponse)=>{
        console.log("Interceptor caught error:", error.status);
        if(error.status === 401){
          alert("Session expired. Please login again...");
          localStorage.removeItem('token');
          router.navigate(['/admin/login']);
        }
        return throwError(() => error);
      }
      )
    )
  }
   return next(req);
};