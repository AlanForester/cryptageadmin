import {Directive, Renderer, ElementRef, Optional, Input, Output, EventEmitter} from '@angular/core';
import {NgModel, NgControl} from '@angular/forms';

declare var jQuery: any;
declare var Switchery: any;


@Directive({
    selector: 'input.switchery:not(.notdirective)',
})

export class SwitcheryDirective {

    private element:ElementRef;

    switchery: any;

    constructor(private renderer: Renderer, elementRef: ElementRef,
                private control: NgControl) {
        this.element = elementRef;
    }

    ngOnInit() {
    }

    ngOnDestroy() {
    }



    ngAfterViewInit() {
        this.switchery = new Switchery(this.element.nativeElement);
    }
}