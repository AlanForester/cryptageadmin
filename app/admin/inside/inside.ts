import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {Title} from '@angular/platform-browser'
import {InternalService} from "../../_services/internal.service";


declare var jQuery: any;


@Component({
    moduleId: module.id.toString(),
    selector: 'adminBetween',
    templateUrl: '/app/admin/inside/inside.html',
    providers: [InternalService],
})
export class AdminInside {
    rows: any[] = [];

    timer:any;
    filters:any;

    constructor(private router: Router, title: Title, private service: InternalService) {
        title.setTitle("Главная - EmpireCPA");


        jQuery('#preloader').show();
    }

    ngOnInit() {
        this.getData();

        // this.autoOn();

    }

    ngOnDestroy() {
        this.autoOff();
    }

    autoOn() {
        this.timer = setInterval(()=>{
            this.getData();
        },5000);
    }

    autoOff() {
        if (this.timer) {
            clearInterval(this.timer);
        }
    }

    autoChange(e:boolean) {
        this.autoOff();
        if (e) {
            this.autoOn();
        }
    }

    filterChange(e:any) {
        console.log(e)

        this.filters = e;
        this.getData();
    }

    getData() {
        let s1 = this.service.getInternalList(this.filters).subscribe(
            res => {
                console.log('inside', res);
                this.rows = res;
                jQuery('#preloader').hide();
            },
            error => {
                console.log(error)
            }
        );
    }
}
