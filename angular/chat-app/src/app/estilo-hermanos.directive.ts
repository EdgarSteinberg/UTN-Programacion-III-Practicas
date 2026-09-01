import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appEstiloHermanos]',
  standalone: false
})
export class EstiloHermanosDirective {

  constructor(private element: ElementRef) {
    this.element.nativeElement.style.backgroundColor = 'green'
  }

}
