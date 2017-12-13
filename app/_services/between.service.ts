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
}