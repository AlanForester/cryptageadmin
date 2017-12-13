import {Injectable} from '@angular/core';
import {Http, Headers, Response, RequestOptions} from '@angular/http';
import {Observable, Observer} from 'rxjs';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch';
import {AuthenticationService} from "./authentication.service";
import {ConfigService} from "./config.service";
import {BaseService} from "./base.service";
import {document} from "@angular/platform-browser/src/facade/browser";

@Injectable()
export class UserService {

    sessionLabel:string;

    constructor(private BS: BaseService) {}

    user(): Observable<any> {
        return this.BS.httpPost('/user/main', {})
            .map((response: Response) => {
                let res = response.json();
                if (res && res.valid) {
                    // if (res.result && res.result.label) {
                    //     if (!this.sessionLabel) {
                    //         this.sessionLabel = res.result.label;
                    //     }
                    //     if (this.sessionLabel!=res.result.label) {
                    //         console.log('reload...');
                    //         window.location.reload();
                    //     }
                    // }
                    // if (res.result && res.result.reset) {
                    //     localStorage.removeItem('currentUser');
                    //     console.log('reset user...');
                    //     window.location.reload();
                    // }
                    return res.data
                }
                return {}
            })
    }
    // getuser(): Observable<any> {
    //     return this.BS.httpPost('/api/user/profile', {})
    //         .map((response: Response) => {
    //             let res = response.json();
    //             if (res && res.valid) {
    //                 return res.result
    //             }
    //             return []
    //         })
    // }
    // getPaymentsList(): Observable<any> {
    //     return this.BS.httpPost('/api/cabinet/finances/payments', {})
    //         .map((response: Response) => {
    //             let res = response.json();
    //             if (res && res.valid) {
    //                 return res.result
    //             }
    //             return []
    //         })
    // }
    // updateUserProfileGenerel(filds:any): Observable<any> {
    //     let data:any = {};
    //     if (filds.name) {
    //         data.name = filds.name;
    //     }
    //     if (filds.skype) {
    //         data.skype = filds.skype
    //     }
    //     if (filds.payments) {
    //         data.payments = filds.payments
    //     }
    //     if (filds.postBack) {
    //         data.postBack = filds.postBack
    //     }
    //     return this.BS.httpPost('/api/user/set', data)
    //         .map((response: Response) => {
    //             let res = response.json();
    //             if (res && res.valid) {
    //                 return res.result
    //             }
    //             return []
    //         })
    // }
    // updateUserAvatar(img:any): Observable<any> {
    //     let b64 = '';
    //     if (img.length>0) {
    //         b64 = img.replace('data:image/png;base64,', '');
    //     } else {
    //         b64 = '0';
    //     }
    //     return this.BS.httpPost('/api/user/set/avatar', {avatar:b64})
    //         .map((response: Response) => {
    //             let res = response.json();
    //             if (res && res.valid) {
    //                 return res.result
    //             }
    //             return []
    //         })
    // }
    // changePassword(oldpass:string, newpass:string): Observable<any> {
    //     return this.BS.httpPost('/api/user/newpass', {old:oldpass,new:newpass})
    //         .map((response: Response) => {
    //             let res = response.json();
    //             if (res && res.valid) {
    //                 return true
    //             }
    //             return false
    //         })
    // }
    // getMaxValute(walletType:string): Observable<any> {
    //     return this.BS.httpPost('/api/cabinet/streams/maxvalue', {wallet:walletType})
    //         .map((response: Response) => {
    //             let res = response.json();
    //             if (res && res.valid) {
    //                 return res.result
    //             }
    //             return false
    //         })
    // }
    // requestPayout(data:string): Observable<any> {
    //     return this.BS.httpPost('/api/cabinet/finances/payouts', data)
    //         .map((response: Response) => {
    //             let res = response.json();
    //             if (res && res.valid) {
    //                 return res.result
    //             }
    //             return false
    //         })
    // }
}