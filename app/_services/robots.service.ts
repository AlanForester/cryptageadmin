import {Injectable} from '@angular/core';
import {Response} from '@angular/http';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map'
import {BaseService} from "./base.service";

@Injectable()
export class RobotsService {

    constructor(private BS: BaseService) {
    }

    getRobotsList(): Observable<any> {
        // let data: any = {};
        // if (filters) {
        //     data.filters = filters;
        // }
        return this.BS.httpPost('/user/robots/list', {})
            .map((response: Response) => {
                // console.log(response)
                let res = response.json();
                if (res && res.valid) {
                    return res.result
                }
                return []
            })
    }

    // getExchanges(): Observable<any> {
    //     return this.BS.httpPost('/user/exchanges', {})
    //         .map((response: Response) => {
    //             // console.log(response)
    //             let res = response.json();
    //             if (res && res.valid) {
    //                 return res.result
    //             }
    //             return []
    //         })
    // }
    //
    // getAssets(): Observable<any> {
    //     return this.BS.httpPost('/user/assets', {})
    //         .map((response: Response) => {
    //             // console.log(response)
    //             let res = response.json();
    //             if (res && res.valid) {
    //                 return res.result
    //             }
    //             return []
    //         })
    // }
    //
    // getFilterList(): Observable<any> {
    //     return this.BS.httpPost('/user/filters', {})
    //         .map((response: Response) => {
    //             // console.log(response)
    //             let res = response.json();
    //             if (res && res.valid) {
    //                 return res.result
    //             }
    //             return []
    //         })
    // }
    //
    // getAddFilter(): Observable<any> {
    //     return this.BS.httpPost('/user/filters', {})
    //         .map((response: Response) => {
    //             // console.log(response)
    //             let res = response.json();
    //             if (res && res.valid) {
    //                 return res.result
    //             }
    //             return []
    //         })
    // }

    // addSignal(id: number, percent: number, name: string): Observable<any> {
    //     return this.BS.httpPost('/user/signals/set', {type: 1, id: id, percent: percent, name: name, data1:3})
    //         .map((response: Response) => {
    //             // console.log(response)
    //             let res = response.json();
    //             if (res && res.valid) {
    //                 return res.result
    //             }
    //             return []
    //         })
    // }
}