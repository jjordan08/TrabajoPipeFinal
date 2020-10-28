import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'date3'
})
export class Date3Pipe implements PipeTransform {

  transform(value: string): string {

    var startTime = new Date(value);
    var endTime = new Date();
    var difference = endTime.getTime() - startTime.getTime();
    var resultInMinutes = Math.round(difference / 60000);

    if(resultInMinutes > 360 && resultInMinutes < 720) {
      return "Conectado hace menos de 12 horas."
    }

    return "Conectado recientemente."
  }

}
