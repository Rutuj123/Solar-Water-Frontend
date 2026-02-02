import { HttpInterceptorFn } from "@angular/common/http";

export const jwtInterceptor: HttpInterceptorFn = (req, next) => {

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
    return next(authReq);
  }
   return next(req);
};