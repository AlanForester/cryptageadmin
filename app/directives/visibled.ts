import {Directive, Renderer, ElementRef, Output, EventEmitter} from '@angular/core';

declare var jQuery: any;


@Directive({
    selector: 'visibled',
})

export class VisibledDirective {

    private element:any;
    @Output() onVisibled:any;

    constructor(private renderer: Renderer, elementRef: ElementRef) {
        this.element = elementRef;
        this.onVisibled = new EventEmitter();
    }

    /**
     ** для мультиселекта начальное значение null или [] !!!
     **/

    ngOnInit() {
    }

    ngOnDestroy() {
    }

    ngAfterViewInit() {
        let el = this.element.nativeElement;
        let onVisibled = this.onVisibled;
        jQuery( window ).scroll(function(e:any) {
            let top = jQuery(el).offset().top - jQuery(window).scrollTop()-jQuery(window).height();
            if (top<=0) {
                onVisibled.emit(true)
            }
        });
    }


}