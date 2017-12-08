import { Injectable } from '@angular/core';
import {Response} from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'
import {BaseService} from "./base.service";

@Injectable()
export class MainService {

    constructor(private BS: BaseService) {}

    getMainPage(): Observable<any> {
        return this.BS.httpPost('/api', {})
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