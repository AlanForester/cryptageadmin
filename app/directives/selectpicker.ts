import {Directive, Renderer, ElementRef, Optional, Input, Output, EventEmitter} from '@angular/core';
import {NgModel, NgControl} from '@angular/forms';

declare var jQuery: any;


@Directive({
    selector: 'select.selectpicker:not(.notdirective)',
})

export class SelectPicker {

    private element:ElementRef;
    // private dataSub;
    @Input() private boolean: any; // если нужно чтобы возвращался булевый тип
    @Input() private refresh: any; // время в секундах для обновления
    private refreshTtime: any;

    @Input() private count: any; // обновляем если изменилось

    @Output() searchEvent:EventEmitter<any> = new EventEmitter();


    constructor(private renderer: Renderer, elementRef: ElementRef,
                private control: NgControl) {
        this.element = elementRef;
        if (!this.refresh) {
            this.refresh = 60;
        }
    }

    /**
     ** для мультиселекта начальное значение null или [] !!!
     **/

    ngOnInit() {
        // отслеживаем изменения данных и обновляем селект2
        if (this.control) {
            // this.dataSub = this.control.valueChanges.subscribe((values) => {
            let dataSub = this.control.valueChanges.subscribe((values) => {
                // console.log(values)
                jQuery(this.element.nativeElement).selectpicker('refresh');
                jQuery(this.element.nativeElement).trigger('changed.bs.select');
            })
        }
        this.refreshTtime = setInterval(() => {
            jQuery(this.element.nativeElement).selectpicker('refresh');
            jQuery(this.element.nativeElement).trigger('changed.bs.select');
        }, this.refresh * 1000);

    }

    ngOnDestroy() {
        if (this.refreshTtime) {
            clearInterval(this.refreshTtime)
        }
    }

    ngOnChanges(changes:any) {
        if (changes.count) {
            setTimeout(()=>{
                jQuery(this.element.nativeElement).selectpicker('refresh');
                jQuery(this.element.nativeElement).trigger('changed.bs.select');
            })
        }
    }


    ngAfterViewInit() {
        jQuery(this.element.nativeElement).selectpicker();
        jQuery(this.element.nativeElement).on( // подключаем селект2 и обработчик события
            'change',
            (e:any) => {
                if (jQuery(this.element.nativeElement).is('[multiple]')) {
                    let values = [];
                    let selectValue = jQuery(e.target).val();
                    if (selectValue && selectValue.length) {
                        for (let value of selectValue) {
                            let valueArray = value.split('\'');
                            values.push(valueArray[1]);
                        }
                    }
                    this.control.control.patchValue(values);
                } else {
                    let value = jQuery(e.target).val();
                    if (!!this.boolean && value == 'true') {
                        value = true;
                    }
                    if (!!this.boolean && value == 'false') {
                        value = false;
                    }
                    this.control.control.patchValue(value);
                }
            }
        );

        let search = jQuery(this.element.nativeElement).prev('.dropdown-menu').find('.bs-searchbox input')
        search.on('keyup', (e:any) => {
            // console.log(e)
            // console.log(search.val())
            this.searchEvent.emit(search.val())
            // jQuery(this.element.nativeElement).selectpicker('refresh');
            // jQuery(this.element.nativeElement).trigger('changed.bs.select');
        })

        jQuery(this.element.nativeElement).on('changed.bs.select', function (e:any) {
            setTimeout(()=>{
                if (jQuery(this).is('.ng-invalid')) {
                    jQuery(this).parent('.bootstrap-select').addClass('ng-invalid')
                } else {
                    jQuery(this).parent('.bootstrap-select').removeClass('ng-invalid')
                }
                if (jQuery(this).is('.ng-valid')) {
                    jQuery(this).parent('.bootstrap-select').addClass('ng-valid')
                } else {
                    jQuery(this).parent('.bootstrap-select').removeClass('ng-valid')
                }
            },500);
        });
        if (jQuery(this.element.nativeElement).is('[multiple]')) {
            jQuery(this.element.nativeElement).on('changed.bs.select', function (e:any) {
                let temp = jQuery(this).prev('.dropdown-menu').children('ul').children('.selected');
                jQuery(this).prev('.dropdown-menu').children('ul').children('.selected').remove();
                jQuery(this).prev('.dropdown-menu').children('ul').prepend(temp);
            });
            jQuery(this.element.nativeElement).on('show.bs.select', function (e:any) {
                let temp = jQuery(this).prev('.dropdown-menu').children('ul').children('.selected');
                jQuery(this).prev('.dropdown-menu').children('ul').children('.selected').remove();
                jQuery(this).prev('.dropdown-menu').children('ul').prepend(temp);
            });
            // jQuery(this.element.nativeElement).on('changed.bs.select', function (e:any) {
            //     let temp = jQuery(this).next().find('.dropdown-menu').children('ul').children('.selected');
            //     jQuery(this).next().find('.dropdown-menu').children('ul').children('.selected').remove();
            //     jQuery(this).next().find('.dropdown-menu').children('ul').prepend(temp);
            // });
            // jQuery(this.element.nativeElement).on('show.bs.select', function (e:any) {
            //     let temp = jQuery(this).next().find('.dropdown-menu').children('ul').children('.selected');
            //     jQuery(this).next().find('.dropdown-menu').children('ul').children('.selected').remove();
            //     jQuery(this).next().find('.dropdown-menu').children('ul').prepend(temp);
            // });
        }
    }
}