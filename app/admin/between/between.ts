import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Title} from '@angular/platform-browser'
import {FormControl, FormGroup} from "@angular/forms";

import * as Moment from 'moment';
import {MainService} from "../../_services/main.service";

var Chartist: any = require('chartist');
require('chartist-plugin-tooltips');

declare var jQuery: any;


export const STATUS_INFO = 0;
export const STATUS_LOGIN = 1;
export const STATUS_LOGOUT = 2;
export const STATUS_NEW_ORDER = 3;
export const STATUS_ORDER_CHANGE_STATUS = 4;

@Component({
    moduleId: module.id.toString(),
    selector: 'adminBetween',
    templateUrl: '/app/admin/between/between.html',
    providers: [MainService],
})

export class AdminBetween {
    diff: any[] = [];

    form: FormGroup;

    constructor(private router: Router, title: Title, private service: MainService) {
        title.setTitle("Главная - EmpireCPA");

        this.form = new FormGroup({
            exchangeEnable: new FormControl(false),
            exchange: new FormControl(null),
            pairEnable: new FormControl(false),
            pair: new FormControl(null),
            valuteEnable: new FormControl(false),
            valute: new FormControl(null),
        })

        jQuery('#preloader').show();
    }

    ngOnInit() {
        // this.getData();
        //
        // setInterval(()=>{
        //     this.getData();
        // },5000)

        this.form.valueChanges.subscribe((val)=>{
            console.log(val)
        })
    }

    ngOnDestroy() {
    }

    getData() {
        let s1 = this.service.getMainPage().subscribe(
            res => {
                console.log('getMainPage', res);
                this.diff = res;
            },
            error => {
                console.log(error)
            }
        );
    }

}
