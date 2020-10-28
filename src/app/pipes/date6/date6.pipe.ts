import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'date6'
})
export class Date6Pipe implements PipeTransform {

  transform(value: string): string {

    var startTime = new Date(value);
    var endTime = new Date();
    var difference = endTime.getTime() - startTime.getTime();
    var resultInMinutes = Math.round(difference / 60000);


    if (resultInMinutes > 1440) {
      var valueTime = endTime.getMonth() - startTime.getMonth() ;
      if (valueTime <= 1) {
        return 'Conectado mes pasado'
      }
    }
    return "Conectado recientemente."
  }

}
