import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { IdentityService } from '../services/identity/identity.service';
  
    @Injectable()
    export class AddIdentityHeaderHttpInterceptor implements HttpInterceptor {
      constructor(private readonly identityService: IdentityService) {}
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      const clonedRequest = req.clone({ headers: req.headers.append('X-Identity', this.identityService.getIdentity()) });
      return next.handle(clonedRequest);
    }
  }