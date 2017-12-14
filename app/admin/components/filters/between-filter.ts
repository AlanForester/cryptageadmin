import {Component, OnInit} from '@angular/core';
import {BetweenService} from "../../../_services/between.service";
import {FormControl, FormGroup} from "@angular/forms";


declare var jQuery: any;


@Component({
    moduleId: module.id.toString(),
    selector: 'admin-between-filters',
    templateUrl: '/app/admin/components/filters/between-filter.html',
    providers: [BetweenService],
})

export class AdminBetweenFilters {
    private form: FormGroup;

    private exchanges: any[];
    private pairs: any[];
    private actives: any[];

    constructor(private service: BetweenService) {
        this.form = new FormGroup({
            exchangeEnable: new FormControl(false),
            exchange: new FormControl(null),
            pairEnable: new FormControl(false),
            pair: new FormControl(null),
            valuteEnable: new FormControl(false),
            valute: new FormControl(null),
        })
    }

    ngOnInit() {
        this.getExchanges();
        this.getPairs();
        this.getActives();
    }

    getExchanges() {
        let s1 = this.service.getExchanges().subscribe(
            res => {
                this.exchanges = res;
            },
            error => {
                console.log(error)
            }
        );
    }

    getPairs() {
        let s1 = this.service.getPairs().subscribe(
            res => {
                this.pairs = res;
            },
            error => {
                console.log(error)
            }
        );
    }

    getActives() {
        let s1 = this.service.getActives().subscribe(
            res => {
                this.actives = res;
            },
            error => {
                console.log(error)
            }
        );
    }
}
