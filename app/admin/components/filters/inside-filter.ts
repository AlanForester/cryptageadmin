import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {BetweenService} from "../../../_services/between.service";
import {FormControl, FormGroup} from "@angular/forms";
import {InternalService} from "../../../_services/internal.service";


declare var jQuery: any;



@Component({
    moduleId: module.id.toString(),
    selector: 'admin-inside-filters',
    templateUrl: '/app/admin/components/filters/inside-filter.html',
    providers: [InternalService],
})

export class AdminInsideFilters {
    @Output() filterChangeEvent: EventEmitter<any> = new EventEmitter();


    private form: FormGroup;

    private exchangesList: any[];
    private assetsList: any[];
    private activesList: any[];

    constructor(private service: InternalService) {
        this.form = new FormGroup({
            exchangesEnable: new FormControl(false),
            exchanges: new FormControl(null),
            assetsEnable: new FormControl(false),
            assets: new FormControl(null),
        })
    }

    ngOnInit() {
        this.getExchanges();
        this.getAssets();

        this.filterChangeEvent.emit(this.form.value);

        this.form.valueChanges.subscribe((val) => {
            this.filterChangeEvent.emit(val);
        })
    }

    getExchanges() {
        let s1 = this.service.getExchanges().subscribe(
            res => {
                this.exchangesList = res;
            },
            error => {
                console.log(error)
            }
        );
    }

    getAssets() {
        let s1 = this.service.getAssets().subscribe(
            res => {
                this.assetsList = res;
            },
            error => {
                console.log(error)
            }
        );
    }

}
