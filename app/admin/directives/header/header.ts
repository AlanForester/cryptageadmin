import {Component} from '@angular/core';

import {Router} from "@angular/router";


@Component({
    moduleId: module.id.toString(),
    selector: 'header',
    templateUrl: '/app/admin/directives/header/header.html',
})
export class AdminHeaderDirective {
    constructor(public router: Router) {

    }
}