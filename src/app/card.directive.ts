import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appCard]'
})
export class CardDirective {
  numberOfClicks=1;
  constructor() { }
@HostListener('click',['$event.target'])
onClick() {
  console.log('number of clicks:', this.numberOfClicks++);
}
}

