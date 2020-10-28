import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'date5'
})
export class Date5Pipe implements PipeTransform {

  transform(value: string): string {

    var startTime = new Date(value);
    var endTime = new Date();
    var difference = endTime.getTime() - startTime.getTime();
    var resultInMinutes = Math.round(difference / 60000);


    if (resultInMinutes > 1440) {
      if (startTime.getMonth() == endTime.getMonth()) {
        return "Conectado este mes"
      }
    }
    return "Conectado recientemente."
  }



}
