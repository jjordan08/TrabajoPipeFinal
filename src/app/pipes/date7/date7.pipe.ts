import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'date7'
})
export class Date7Pipe implements PipeTransform {

  transform(value: string): string {

    var startTime = new Date(value);
    var endTime = new Date();
    var difference = endTime.getTime() - startTime.getTime();
    var resultInMinutes = Math.round(difference / 60000);


    if (resultInMinutes > 86400) {
        return "Conectado este año"
    }
    return "Conectado recientemente."
  }

}
