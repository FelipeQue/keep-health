import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ageFromDate',
  standalone: true
})
export class AgeFromDatePipe implements PipeTransform {

  transform(value: string): number {
    const today = new Date();
    const dateOfBirth = new Date(value);
    let age = today.getFullYear() - dateOfBirth.getFullYear();
    const monthCheck = today.getMonth() - dateOfBirth.getMonth();
    if (monthCheck < 0 || (monthCheck === 0 && today.getDate() < dateOfBirth.getDate())) {
      age--;
    }
    return age;
  }

}
