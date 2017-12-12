import {Directive, Renderer, ElementRef, Optional, Input, Output, EventEmitter} from '@angular/core';
import {NgModel, NgControl} from '@angular/forms';

declare var jQuery: any;


@Directive({
    selector: 'select.multiselect:not(.notdirective)',
})

export class MultiselectDirective {

    private element:ElementRef;

    constructor(private renderer: Renderer, elementRef: ElementRef,
                private control: NgControl) {
        this.element = elementRef;
    }

    ngOnInit() {
    }

    ngOnDestroy() {
    }

    ngOnChanges(changes:any) {
    }


    ngAfterViewInit() {
        jQuery(this.element.nativeElement).multiselect({
            onChange: function() {
                jQuery.uniform.update();
            }
        });
        // jQuery(this.element.nativeElement).selectpicker();
        // jQuery(this.element.nativeElement).on( // подключаем селект2 и обработчик события
        //     'change',
        //     (e:any) => {
        //         if (jQuery(this.element.nativeElement).is('[multiple]')) {
        //             let values = [];
        //             let selectValue = jQuery(e.target).val();
        //             if (selectValue && selectValue.length) {
        //                 for (let value of selectValue) {
        //                     let valueArray = value.split('\'');
        //                     values.push(valueArray[1]);
        //                 }
        //             }
        //             this.control.control.patchValue(values);
        //         } else {
        //             let value = jQuery(e.target).val();
        //             if (!!this.boolean && value == 'true') {
        //                 value = true;
        //             }
        //             if (!!this.boolean && value == 'false') {
        //                 value = false;
        //             }
        //             this.control.control.patchValue(value);
        //         }
        //     }
        // );

    }
}