import { DatePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';
import { from } from 'rxjs';

@Pipe({
  name: 'customeDate'
})
export class CustomeDatePipe implements PipeTransform {
  private datePipe: DatePipe = new DatePipe('en-US');

  transform(value: Date, displayType: string = 'default'): any {

    let format : string;  

    // if (!value)
    //   return '';
    
    // let formatDate: string | null



    // handling different formats of the date

    switch (displayType) {
      case 'short':
        format = 'shortDate';
        break;
      case 'medium':
        format = 'mediumDate';
        break;
      case 'long':
        format = 'longDate';
        break;
      case 'full':
        format = 'fullDate';
        break;
      default:
        format = 'dd-MM-yyyy';

  }
  return this.datePipe.transform(value,format)
}

}
