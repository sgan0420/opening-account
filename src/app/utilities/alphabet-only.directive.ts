import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appAlphabetOnly]',
})
export class AlphabetOnlyDirective {
  constructor(private el: ElementRef) {}

  @HostListener('input', ['$event'])
  onInput(event: Event) {
    const inputElement = this.el.nativeElement as HTMLInputElement;
    const newValue = inputElement.value.replace(/[^a-zA-Z]/g, '');
    inputElement.value = newValue;
    // event.preventDefault();
  }
}
