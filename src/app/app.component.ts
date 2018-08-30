import { Component } from '@angular/core';
import { AuthService, HttpListenerService } from './index';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  HTTPActivity : boolean;
  constructor(private httpStatus : HttpListenerService, private authService : AuthService){
    this.httpStatus.getHttpStatus().subscribe((status: boolean) => {this.HTTPActivity = status; console.log(status)});
  }

  ngOnInit(): void {
    this.authService.sampleRequest().subscribe(success => console.table(success), err => console.log(err));
  }

  
}
