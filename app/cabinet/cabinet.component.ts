import {Component} from '@angular/core';

declare var jQuery: any;

@Component({
    moduleId: module.id.toString(),
    selector: 'cabinet',
    templateUrl: '/app/cabinet/cabinet.component.html',
})

export class Cabinet {
    constructor() {
        jQuery('body').removeClass('auth');
    }
}