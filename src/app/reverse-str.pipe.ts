import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverseStr'
})
export class ReverseStrPipe implements PipeTransform {
  transform(value:number):number{
    return Math.sqrt(value);
}
  // transform(value: string): string {
    // let newstr:string="";
    // for(let i=value.length-1;i>=0;i--){
    //   newstr+=value.charAt(i);
    // }
    // return newstr;
}
