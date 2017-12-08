import {Component} from '@angular/core';
import {Router} from "@angular/router";

@Component({
    moduleId: module.id.toString(),
    selector: 'mainMenu',
    templateUrl: '/app/cabinet/directives/main-menu/main-menu.html'
})

export class MainMenuDirective {
    /**
     * Current finance state of current user.
     */
    public finance = {
        hold: 0,
        cash: 0,
        prefix: '',
        postfix: '',
        str: '',
        all: <any>[]
    };

    private valutes:Object = {};
    private defaultValute:String;

    constructor(public router: Router) {

    }
}
