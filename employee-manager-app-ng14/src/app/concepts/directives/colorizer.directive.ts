import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Renderer2
} from '@angular/core';

//decorator
@Directive({
  selector: '[appColorizer]' //attribute Selector
})
export class ColorizerDirective {
  @HostBinding('style.border') border: string;
  @HostBinding('style.background-color') bgColor: string;
  @HostListener('mouseover') handleMouseOver() {
    this.border = '5px solid green';
  }
  @HostListener('mouseleave') handleMouseLeave() {
    this.border = '5px solid blue';
  }
  @HostListener('click') handleClick() {
    this.bgColor = 'brown';
  }

  constructor(
    private elRef: ElementRef,
    private renderer: Renderer2
  ) {
    console.log('Inside ColorizerDirective Constructor');
    // 1. find out the element in which this directive is used
    // using ElementRef class
    console.log(this.elRef.nativeElement);
    const divEl = this.elRef.nativeElement;

    this.bgColor = 'lightblue';
    this.border = '5px solid blue';
    // 2. change the style
    // divEl.style.backgroundColor = 'red';
    // divEl.style.height = '200px';
    // divEl.style.color = '#fff';
    this.renderer.setStyle(divEl, 'background-color', this.bgColor);
    this.renderer.setStyle(divEl, 'height', '200px');
    this.renderer.setStyle(divEl, 'color', '#fff');
  }

  // Learn about @HostListener()
  // Learn about @HostBinding()
}
