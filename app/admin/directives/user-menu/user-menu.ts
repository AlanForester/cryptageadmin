import {Component} from '@angular/core';
import {ReactiveService} from "../../../_services/reactive.service";

@Component({
    moduleId: module.id.toString(),
    selector: 'user-menu',
    templateUrl: '/app/admin/directives/user-menu/user-menu.html'
})

export class UserMenuDirective {
    public user: any;
    constructor(RS: ReactiveService) {
        RS.startUserData()
        let s = RS.userData.subscribe(
            res => {
                this.user = res;
            });
    }
}
