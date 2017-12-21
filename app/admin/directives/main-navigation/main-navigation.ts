import {Component} from '@angular/core';
import {ReactiveService} from "../../../_services/reactive.service";

@Component({
    moduleId: module.id.toString(),
    selector: 'main-navigation',
    templateUrl: '/app/admin/directives/main-navigation/main-navigation.html'
})

export class MainNavigationDirective {
    public user: any;
    constructor(RS: ReactiveService) {
        RS.startUserData()
        let s = RS.userData.subscribe(
            res => {
                this.user = res;
            });
    }
}
