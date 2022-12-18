import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserServiceService } from './user-service.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private authService: UserServiceService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler) {
      const authToken = this.authService.getToken();
      req = req.clone({
          setHeaders: {
              Authorization: "Bearer " + authToken
          }
      });
      return next.handle(req);
  }
}