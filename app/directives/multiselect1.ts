import {Directive, Renderer, ElementRef, Optional, Input, Output, EventEmitter} from '@angular/core';
import {NgModel, NgControl} from '@angular/forms';

declare var jQuery: any;


@Directive({
    selector: 'select.multiselect-select-all-filtering:not(.notdirective)',
})

export class Multiselect1Directive {

    private element: ElementRef;

    constructor(private renderer: Renderer, elementRef: ElementRef,
                private control: NgControl) {
        this.element = elementRef;
    }

    ngOnInit() {
    }

    ngOnDestroy() {
    }

    ngOnChanges(changes: any) {
    }


    ngAfterViewInit() {
        jQuery(this.element.nativeElement).multiselect({
            includeSelectAllOption: false,
            enableFiltering: true,
            templates: {
                filter: '<li class="multiselect-item multiselect-filter"><i class="icon-search4"></i> <input class="form-control" type="text"></li>'
            },
            onSelectAll: () => {
                jQuery.uniform.update();
            },
            onChange: (option:any, checked:any, select:any) => {
                this.control.control.patchValue(jQuery(option).val());
            }
        });

    }
}