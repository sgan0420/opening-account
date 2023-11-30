import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appCharacterOnly]',
})
export class CharacterOnlyDirective {
  constructor(private el: ElementRef) {}

  @HostListener('input', ['$event'])
  onInput(event: Event) {
    const inputElement = this.el.nativeElement as HTMLInputElement;
    inputElement.value = inputElement.value.replace(/[0-9]/g, '');
    event.preventDefault();
  }
}
