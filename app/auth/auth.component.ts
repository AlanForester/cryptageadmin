import {Component} from '@angular/core';
import {Router} from "@angular/router";

declare var jQuery: any;

@Component({
    selector: 'auth',
    template: '<router-outlet></router-outlet>',
})

export class Auth {
    constructor(router: Router) {
        // if (Meteor.userId()) {
        //     router.navigate(['/cabinet', 'main']);
        // }
        jQuery('body').addClass('auth');
    }
}