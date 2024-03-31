import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cmToMeters',
  standalone: true
})
export class CmToMetersPipe implements PipeTransform {

  transform(value: number): number {
    return value/100;
  };
  
};
