import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http : HttpClient) {
    console.table(this.sampleRequest());
   }

  sampleRequest() : Observable<any>
  {
    let url : string = 'https://api.github.com/users/jdsrao';
    return this.http.get(url);
  }
}
