import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {Title} from '@angular/platform-browser'
import {InternalService} from "../../_services/internal.service";

declare var jQuery: any;
// declare var SockJS: any;
// declare var Stomp: any;


@Component({
    moduleId: module.id.toString(),
    selector: 'adminBetween',
    templateUrl: '/app/admin/inside/inside.html',
    providers: [InternalService],
})
export class AdminInside {
    rows: any[] = [];
    // keys: any = [];

    timer:any;
    filters:any;

    private id: number;
    private percent: number;
    private name: string;

    constructor(private router: Router, title: Title, private service: InternalService) {
        title.setTitle("Главная - EmpireCPA");


        jQuery('#preloader').show();
    }

    ngOnInit() {

        // // let ws = new WebSocket('ws://localhost:15670/ws');
        // let ws = new SockJS('http://10.0.1.1:15674/stomp');
        // let client = Stomp.over(ws);
        // client.heartbeat.outgoing = 0;
        // client.heartbeat.incoming = 0;
        // // client.debug = null;
        //
        // let on_connect = () => {
        //     console.log('connected');
        //     let id = client.subscribe("/queue/internal", (d:any) => {
        //     // let id = client.subscribe("/exchange/internal", function(d:any) {
        //         try {
        //             let data = JSON.parse(d.body);
        //             data.ts = new Date().getTime();
        //             let key = data.market + data.asset1 + data.asset2 + data.asset3;
        //             if (this.keys[key]>=0) {
        //                 this.rows[this.keys[key]] = data;
        //             } else {
        //                 this.keys[key] = this.rows.length;
        //                 this.rows.push(data);
        //             }
        //         } catch (e) {
        //             console.log(e)
        //         }
        //     });
        //     let id1 = client.subscribe("/queue/test", function(d:any) {
        //     // let id = client.subscribe("/exchange/internal", function(d:any) {
        //         console.log(d.body);
        //     });
        //     // client.send('/topic/test', {"content-type":"text/plain"}, '1111111111111');
        // };
        // let on_error =  function(e:any) {
        //     console.log('error',e);
        // };
        // client.connect('guest', 'guest', on_connect, on_error, '/');

        // setInterval(()=>{
        //     let date = new Date().getTime();
        //     for (let i in this.rows) {
        //         if (date-this.rows[i].ts>10000) {
        //             console.log(date - this.rows[i].ts)
        //             this.rows[i].percent = 0;
        //         }
        //     }
        // },1000)

        this.getData();

        this.autoOn();

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

    addSignalClick(i:number) {
        this.id = this.rows[i].id;
        this.percent = this.rows[i].percent;
        this.name = '' + this.rows[i].exchange + ' ' + this.rows[i].asset1 + '-' + this.rows[i].asset2 + '-' + this.rows[i].asset3;
    }
    addSignal() {
        jQuery('#preloader').show();
        let s1 = this.service.addSignal(this.id, this.percent, this.name).subscribe(
            res => {
                jQuery('#preloader').hide();
            },
            error => {
                console.log(error)
            }
        );
    }
}
