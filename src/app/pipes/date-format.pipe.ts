import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateFormat',
  standalone: true
})
export class DateFormatPipe implements PipeTransform {

  transform(value: string): string {
    let dateParts = value.split("-");
    let year = dateParts[0];
    let month = dateParts[1];
    let day = dateParts[2];
    return day + " / " + month + " / " + year;
  };

};
