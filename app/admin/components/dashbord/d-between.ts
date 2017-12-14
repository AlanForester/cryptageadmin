import {Component, OnInit} from '@angular/core';
import {BetweenService} from "../../../_services/between.service";
import {FormControl, FormGroup} from "@angular/forms";


declare var jQuery: any;


@Component({
    moduleId: module.id.toString(),
    selector: 'admin-dashbord-between-component',
    templateUrl: '/app/admin/components/dashbord/d-between.html',
    providers: [BetweenService],
})

export class AdminDashbordBetweenComponent {
    rows: any[];

    constructor(private service: BetweenService) {
    }

    ngOnInit() {
    }
}
