import { Directive, Input, ElementRef, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[wind-icon]'
})
export class WindIconDirective implements OnChanges {
  @Input() degree: number;
  constructor(private elementRef: ElementRef) {
  }

  ngOnChanges(changes: SimpleChanges): void {
      if (this.degree) {
         this.elementRef.nativeElement.style.transform = 'rotate(' + this.degree + 'deg)';
      }
  }
}