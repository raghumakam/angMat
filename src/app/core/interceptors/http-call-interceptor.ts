import { Injectable } from '@angular/core';
import {
    HttpInterceptor,
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpErrorResponse
  } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpResponse } from 'selenium-webdriver/http';
import {  Router  } from "@angular/router";

import { every, catchError, map, finalize } from 'rxjs/operators';

import  { AuthService } from '../services/auth.service';
import { HttpListenerService } from '../services/http-listener.service';

@Injectable()
export class HttpCallInterceptor implements HttpInterceptor {
    constructor(
        private authService : AuthService
        , private router : Router
        , private status: HttpListenerService   )
    {

    }

    intercept( request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>
    { 
        let token : string = '';//this.authService.getToken();
        // request = request.clone({setHeaders : 
        //     {
        //         'Content-Type':'application/json',
        //         'Accept': 'application/json',
        //         'Access-Control-Allow-Origin':'http://localhost:4200',
        //         //'Authorization' : `${this.authService.getToken()}`,
        //         'Access-Control-Allow-Credentials':'true'
        //     }});

        return next.handle(request).pipe(
            map(event => {
                return event;
              }),
              catchError(error => {
                return Observable.throw(error);
              }),
              finalize(() => {
                this.status.setHttpStatus(false);
              })
        );
    }
}
