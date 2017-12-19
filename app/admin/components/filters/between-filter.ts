import {Component, EventEmitter, OnInit, Output} from '@angular/core';
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
    @Output() filterChangeEvent: EventEmitter<any> = new EventEmitter();


    private form: FormGroup;

    private exchangesList: any[];
    private pairsList: any[];
    private activesList: any[];

    constructor(private service: BetweenService) {
        this.form = new FormGroup({
            exchangesEnable: new FormControl(false),
            exchanges: new FormControl(null),
            pairsEnable: new FormControl(false),
            pairs: new FormControl(null),
            activesEnable: new FormControl(false),
            actives: new FormControl(null),
        })
    }

    ngOnInit() {
        // this.getExchanges();
        // this.getPairs();
        this.getActives();

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

    getPairs() {
        let s1 = this.service.getPairs().subscribe(
            res => {
                this.pairsList = res;
            },
            error => {
                console.log(error)
            }
        );
    }

    getActives() {
        let s1 = this.service.getActives().subscribe(
            res => {
                console.log('getActives', res)
                for (let i in  res) {
                    res[i].id = res[i].id.toString();
                }
                this.activesList = res;
            },
            error => {
                console.log(error)
            }
        );
    }
}
