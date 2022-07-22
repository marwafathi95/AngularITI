import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    let arr:Array<number>=new Array<number>();
    for (let i = 0; i < value.length; i++) {
      for (let j = i+1; j < value.length; j++) {
        if(value[i]==value[j])
        {
          arr.push(value[i]);
        }
      }
    }
    return arr;
  }

}
