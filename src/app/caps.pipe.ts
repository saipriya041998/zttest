import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'caps'
})
export class CapsPipe implements PipeTransform {

  transform(value: string): string {
    // for(let i=0;i<value.length;i++){
      return value.replace(/\w\S*/g,function(str){
        return str.charAt(0).toUpperCase()+str.substring(1).toLowerCase();
      });
    // }
  }
}
