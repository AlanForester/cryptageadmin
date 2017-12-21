import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {Title} from '@angular/platform-browser'
import {InternalService} from "../../_services/internal.service";
import {SignalService} from "../../_services/signal.service";


declare var jQuery: any;


@Component({
    moduleId: module.id.toString(),
    selector: 'adminBetween',
    templateUrl: '/app/admin/signals-inside/signals-inside.html',
    providers: [SignalService],
})
export class AdminSignalInside {
    rows: any[] = [];

    timer:any;
    filters:any;

    private id: number;
    private percent: number;
    private name: string;

    constructor(private router: Router, title: Title, private service: SignalService) {
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
        let s1 = this.service.getSignalList(this.filters).subscribe(
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

    // addSignalClick(i:number) {
    //     this.id = this.rows[i].id;
    //     this.percent = this.rows[i].percent;
    //     this.name = '' + this.rows[i].exchange + ' ' + this.rows[i].asset1 + '-' + this.rows[i].asset2 + '-' + this.rows[i].asset3;
    //     this.addSignal()
    // }
    // addSignal() {
    //     let s1 = this.service.addSignal(this.id, this.percent, this.name).subscribe(
    //         res => {
    //             console.log('inside', res);
    //             this.rows = res;
    //             jQuery('#preloader').hide();
    //         },
    //         error => {
    //             console.log(error)
    //         }
    //     );
    // }
}
