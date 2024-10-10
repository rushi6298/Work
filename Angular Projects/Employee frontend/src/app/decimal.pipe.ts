import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'decimal'
})
export class DecimalPipe implements PipeTransform {

  transform(value: number, DecimalPlaces: number = 4): unknown {
    if(value===null)
    {
      return '';
    }
    return '$' + value.toFixed(3);
  }

}
