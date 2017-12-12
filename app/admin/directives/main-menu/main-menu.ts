import {Component} from '@angular/core';
import {Router} from "@angular/router";

@Component({
    moduleId: module.id.toString(),
    selector: 'mainMenu',
    templateUrl: '/app/admin/directives/main-menu/main-menu.html'
})

export class MainMenuDirective {
    constructor(public router: Router) {
    }
}
