import {Pipe, PipeTransform} from '@angular/core';


@Pipe({
  name: 'myPipe'
})
export class MyPipePipe implements PipeTransform {

  transform(value: any, args?: any): any {

    var isDone: boolean = true
    let respuesta = " ";
    let copy = value;


    for (let i = 0; i < value.length; i++) {
      var num = value.length;
      console.log(copy);

      if (value[i] == " ") {
        respuesta += " ";
        continue;
      } else {
        if (isDone) {
          respuesta += value[i].toUpperCase();
          isDone = false;
        } else {
          respuesta += value[i].toLowerCase();
          isDone = true;
        }
      }
      console.log(value[i]);
      console.log(respuesta);
    }
    return respuesta;
  }
}
