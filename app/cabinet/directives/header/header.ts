import {Component} from '@angular/core';

import {Router} from "@angular/router";


@Component({
    moduleId: module.id.toString(),
    selector: 'header',
    templateUrl: '/app/cabinet/directives/header/header.html',
})
export class CabinetHeaderDirective {
    cash = 0;
    hold = 0;
    bonus = 0;

    valute: string;
    user: User;

    valutes: any[];

    constructor(public router: Router) {

    }
}