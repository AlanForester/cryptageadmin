import {Directive, Renderer, ElementRef, Optional, Input, Output, EventEmitter} from '@angular/core';
import {NgModel, NgControl} from '@angular/forms';

declare var jQuery: any;
declare var Switchery: any;


@Directive({
    selector: 'input.switchery:not(.notdirective)',
})

export class SwitcheryDirective {

    private element: ElementRef;

    switchery: any;

    control: NgControl;

    constructor(private renderer: Renderer, elementRef: ElementRef,
                @Optional() control: NgControl) {
        this.element = elementRef;
        if (control) {
            this.control = control;
        }
    }

    ngOnInit() {
    }

    ngOnDestroy() {
    }


    ngAfterViewInit() {
        this.switchery = new Switchery(this.element.nativeElement);
        setTimeout(() => { // магия
            if (this.control && this.control.value) {
                this.switchery.checked = true
                if (typeof Event === 'function' || 'fireEvent' !in document) {
                    var event = document.createEvent('HTMLEvents');
                    event.initEvent('change', true, true);
                    this.element.nativeElement.dispatchEvent(event);
                } else {
                    this.element.nativeElement.fireEvent('onchange');
                }

            }
        },500)
    }
}