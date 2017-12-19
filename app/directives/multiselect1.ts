import {Component, ElementRef, forwardRef, Input} from "@angular/core";
import {ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR} from "@angular/forms";

declare var jQuery: any;


@Component({
    moduleId: module.id.toString(),
    selector: 'multiselect-select-all-filtering',
    templateUrl: '/app/directives/multiselect1.html',
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => Multiselect1Directive),
            multi: true,
        }
    ]
})
export class Multiselect1Directive implements ControlValueAccessor {
    @Input() value: any[] = [];
    @Input() items: any[];

    constructor(private elementRef: ElementRef) {
    }

    // the method set in registerOnChange, it is just
    // a placeholder for a method that takes one parameter,
    // we use it to emit changes back to the form
    private propagateChange = (_: any) => {
    };

    // this is the initial value set to the component
    public writeValue(obj: any) {
        if (obj) {
            if (Array.isArray(obj)) {
                this.value = obj;
                // this.onChange(obj)
            } else {
                this.value = [obj];
                // this.onChange([obj])
            }
        }
        console.log('--------',this.value)
    }

    // registers 'fn' that will be fired when changes are made
    // this is how we emit the changes back to the form
    public registerOnChange(fn: any) {
        this.propagateChange = fn;
    }

    // not used, used for touch input
    public registerOnTouched(fn:any) {
        this.touched = fn;
    }

    touched(a:any) {
        console.log('touched', a)

    }

    private onChange(value: any) {
        this.value = value;
        this.propagateChange(this.value);
    }

    ngOnInit() {
        // setInterval(()=>{
        //     console.log(this.formControl.value)
        // },1000)
    }

    ngOnDestroy() {
    }

    ngOnChanges(changes: any) {
        console.log(changes)
        if (changes.items) {
            setTimeout(()=>{
                jQuery(this.elementRef.nativeElement).find('select').multiselect('rebuild');
                jQuery(this.elementRef.nativeElement).find('select').multiselect('refresh');
            })
        }
        if (changes.value) {
            this.writeValue(this.value);
            setTimeout(()=>{
                jQuery(this.elementRef.nativeElement).find('select').multiselect('rebuild');
                jQuery(this.elementRef.nativeElement).find('select').multiselect('refresh');
            },500)
        }
    }

    ngAfterViewInit() {
        jQuery(this.elementRef.nativeElement).find('select').multiselect({
            includeSelectAllOption: false,
            enableFiltering: true,
            templates: {
                filter: '<li class="multiselect-item multiselect-filter"><i class="icon-search4"></i> <input class="form-control" type="text"></li>'
            },
            onSelectAll: () => {
                jQuery.uniform.update();
            },
            onChange: (option:any, checked:any, select:any) => {
                console.log(option, checked, select)
                let option_id = jQuery(option).val();
                if (this.value&&this.value.length) {
                    let find = this.value.indexOf(option_id);
                    if (find > -1) {
                        if (!checked) {
                            //  удаляем
                            this.value.splice(find, 1);
                        }
                    } else {
                        if (checked) {
                            //  добавляем
                            this.value.push(option_id)
                        }
                    }
                } else {
                    this.value = [option_id]
                }
                this.onChange(this.value);
            }
        });
    }
}