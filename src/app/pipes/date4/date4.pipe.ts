import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'date4'
})
export class Date4Pipe implements PipeTransform {

  transform(value: string): string {

    var startTime = new Date(value);
    var endTime = new Date();
    var difference = endTime.getTime() - startTime.getTime();
    var resultInMinutes = Math.round(difference / 60000);

    if(resultInMinutes > 720 && resultInMinutes < 1440) {
      return "Conectado hace menos de 24 horas horas."
    }




    return "Conectado recientemente."
  }

}
