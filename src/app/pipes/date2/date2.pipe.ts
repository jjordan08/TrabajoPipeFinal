import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'date2'
})
export class Date2Pipe implements PipeTransform {

  transform(value: string): string {

    var startTime = new Date(value);
    var endTime = new Date();
    var difference = endTime.getTime() - startTime.getTime();
    var resultInMinutes = Math.round(difference / 60000);

    if (resultInMinutes < 10) {
      return "Conectado hace pocos minutos."
    }

    if(resultInMinutes > 10 && resultInMinutes <360) {
      return "Conectado hace pocas horas."
    }

    return "Conectado recientemente."
  }

}
