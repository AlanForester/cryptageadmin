import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {Title} from '@angular/platform-browser'
import {EventsService} from "../../_services/events.service";


declare var jQuery: any;


@Component({
    moduleId: module.id.toString(),
    selector: 'adminBetween',
    templateUrl: '/app/admin/events-inside/events-inside.html',
    providers: [EventsService],
})
export class AdminEventsInside {
    rows: any[] = [];

    timer:any;
    filters:any;

    private id: number;
    private percent: number;
    private name: string;

    constructor(private router: Router, title: Title, private service: EventsService) {
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
        let s1 = this.service.getEventsList(this.filters).subscribe(
            res => {
                console.log('signal-inside', res);
                this.rows = res;
                jQuery('#preloader').hide();
            },
            error => {
                console.log(error)
            }
        );
    }

}
