import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipeElevado'
})
export class PipeElevadoPipe implements PipeTransform {

  transform(value: number, args?: any): any {

      value = Math.pow(value,2)

    return value;
  }

}
