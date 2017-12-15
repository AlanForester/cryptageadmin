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
            actives: new FormControl('1'),
        })
    }

    ngOnInit() {
        // this.getExchanges();
        // this.getPairs();
        this.getActives();

        setTimeout(()=>{
            console.log('patch')
            this.form.patchValue({actives:'13'})
        },5000)

        this.form.valueChanges.subscribe((val)=>{
            console.log(val)
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
                console.log('getActives',res)
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
