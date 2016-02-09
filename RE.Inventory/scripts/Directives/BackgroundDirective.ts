import {Directive, ElementRef, Renderer, Input} from 'angular2/core';

@Directive({
    selector: '[epi-background-color]'
})
export class BackgroundDirective {
    @Input("epi-background-color") color: string;
    @Input("epi-background-image") image: string;

    constructor(private _el: ElementRef, private _renderer: Renderer) { }
    
    ngOnInit() {

        if (this.color) {
            this._renderer.setElementStyle(this._el.nativeElement, "background-color", "#" + this.color);
        }

        //console.log("Color :" + this.color);
        //console.log("image :" + this.image);
    }
}