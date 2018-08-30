import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'trimText'
})
export class TrimTextPipe implements PipeTransform {

  transform(value: string, args?: any): any {
    return value.length < 20 ? value : value.substr(1, 20) +  '...';
  }

}
