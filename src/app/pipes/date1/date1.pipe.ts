import { Pipe, PipeTransform } from '@angular/core';
import validate = WebAssembly.validate;

@Pipe({
  name: 'date1'
})
export class Date1Pipe implements PipeTransform {

  transform(value: string): string {

    var startTime = new Date(value);
    var endTime = new Date();
    var difference = endTime.getTime() - startTime.getTime(); // This will give difference in milliseconds
    var resultInMinutes = Math.round(difference / 60000);

    if (resultInMinutes < 10) {
      return "Conectado hace pocos minutos."
    }

  }
}
