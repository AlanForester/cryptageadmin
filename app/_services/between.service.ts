import { Injectable } from '@angular/core';
import {Response} from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'
import {BaseService} from "./base.service";

@Injectable()
export class BetweenService {

    constructor(private BS: BaseService) {}

    getDiffs(): Observable<any> {
        return this.BS.httpPost('/user/api', {})
            .map((response: Response) => {
                // console.log(response)
                let res = response.json();
                if (res&&res.valid) {
                    return res.result
                }
                return []
            })
    }
    getExchanges(): Observable<any> {
        return this.BS.httpPost('/user/exchanges', {})
            .map((response: Response) => {
                // console.log(response)
                let res = response.json();
                if (res&&res.valid) {
                    return res.result
                }
                return []
            })
    }
    getPairs(): Observable<any> {
        return this.BS.httpPost('/user/pairs', {})
            .map((response: Response) => {
                // console.log(response)
                let res = response.json();
                if (res&&res.valid) {
                    return res.result
                }
                return []
            })
    }
    getActives(): Observable<any> {
        return this.BS.httpPost('/user/actives', {})
            .map((response: Response) => {
                // console.log(response)
                let res = response.json();
                if (res&&res.valid) {
                    return res.result
                }
                return []
            })
    }
    getFilterList(): Observable<any> {
        return this.BS.httpPost('/user/filters', {})
            .map((response: Response) => {
                // console.log(response)
                let res = response.json();
                if (res&&res.valid) {
                    return res.result
                }
                return []
            })
    }
    getAddFilter(): Observable<any> {
        return this.BS.httpPost('/user/filters', {})
            .map((response: Response) => {
                // console.log(response)
                let res = response.json();
                if (res&&res.valid) {
                    return res.result
                }
                return []
            })
    }
}