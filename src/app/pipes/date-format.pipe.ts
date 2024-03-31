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

    // let months = ["", "janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"];
    // let monthName = months[parseInt(month)];

    return day + "/" + month + "/" + year;
  };

};
