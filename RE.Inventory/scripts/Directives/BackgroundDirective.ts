import {Directive, ElementRef, Renderer, Input} from 'angular2/core';

@Directive({
    //selector: '[SelectiveBackground]',
    selector: 'span',
    inputs: ['SelectiveBackground']
})
export class BackgroundDirective {
    @Input() SelectiveBackground: string;
    
    constructor(el: ElementRef, renderer: Renderer) {

        //console.log('Selective' + this.color);

        el.nativeElement.style.color = this.SelectiveBackground;
        //renderer.setElementStyle(el.nativeElement, 'color', 'red');
    }
}