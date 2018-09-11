import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add authorization header with jwt token if available
        let usuario = JSON.parse(localStorage.getItem('usuario'));
        if (usuario && usuario.token) {
            request = request.clone({
                setHeaders: { 
                    Authorization: `Bearer ${usuario.token}`
                }
            });
        }

        return next.handle(request);
    }
}