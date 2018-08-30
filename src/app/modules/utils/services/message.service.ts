import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private sb : MatSnackBar) { }

  msg(message : string)
  {
    this.sb.open(message,'',{ duration: 1000});
  }

  error(message : string)
  {
    this.sb.open(message);
  }
}
