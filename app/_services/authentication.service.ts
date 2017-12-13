import { Injectable } from '@angular/core';
import {Http, Headers, Response, RequestOptions} from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch';
import {ConfigService} from "./config.service";
import {SHelper} from "../_helpers/SHelper";
import {Router} from "@angular/router";
import {subscribeToResult} from "rxjs/util/subscribeToResult";

@Injectable()
export class AuthenticationService {
    public token: string;
    public userId: string;

    constructor(private http: Http, private cfg: ConfigService, private router: Router) {
        let currentUser = JSON.parse(localStorage.getItem('CRYPLA'));
        this.token = currentUser && currentUser.token;
        this.userId = currentUser && currentUser.userlogin;
    }

    login(userlogin: string, password: string): Observable<boolean> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        // let data=SHelper.base64_encode(JSON.stringify({ userlogin: userlogin, password: password }));

        return this.http.post(this.cfg.apiUrl + '/site/login', JSON.stringify({ userlogin: userlogin, password: password }), options)
            .map((response: Response) => {
                // login successful if there's a jwt token in the response
                let res = response.json();
                if (res && res.valid) {
                    // setFiltres token property
                    this.token = res.token;

                    // store username and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('CRYPLA', JSON.stringify({ userlogin: userlogin, token: this.token }));

                    // return true to indicate successful login
                    return true
                }
                return false
            })
            .catch((error:Response|any)=>{
                console.log(error)
                let errMsg: string;
                if (error instanceof Response) {
                    const body = error.json() || '';
                    const err = body.error || JSON.stringify(body);
                    errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
                } else {
                    errMsg = error.message ? error.message : error.toString();
                }
                console.error(errMsg);
                return Observable.throw(errMsg);
            });
    }
    userCreate(form: any): Observable<boolean> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        let data=SHelper.base64_encode(JSON.stringify({ email: form.email, password: form.password, name: encodeURI(form.username), contacts: [{type: 'Skype', contact: form.skype}]  }));

        return this.http.post(this.cfg.apiUrl + '/site/register', JSON.stringify({ data: data }), options)
            .map((response: Response) => {
                let res = response.json();
                console.log(res)
                if (res && res.valid) {
                    return true
                }
                return false
            })
            .catch((error:Response|any)=>{
                console.log(error)
                let errMsg: string;
                if (error instanceof Response) {
                    const body = error.json() || '';
                    const err = body.error || JSON.stringify(body);
                    errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
                } else {
                    errMsg = error.message ? error.message : error.toString();
                }
                console.error(errMsg);
                return Observable.throw(errMsg);
            });
    }
    emailAlreadyExist(email: string): Observable<boolean> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post(this.cfg.apiUrl + '/api/user/emailex', JSON.stringify({ email: email}), options)
            .map((response: Response) => {
                let res = response.json();
                if (res && res.valid && res.result) {
                    return true
                }
                return false
            })
            .catch((error:Response|any)=>{
                console.log(error)
                let errMsg: string;
                if (error instanceof Response) {
                    const body = error.json() || '';
                    const err = body.error || JSON.stringify(body);
                    errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
                } else {
                    errMsg = error.message ? error.message : error.toString();
                }
                console.error(errMsg);
                return Observable.throw(errMsg);
            });
    }

    logout(): void {
        // clear token remove user from local storage to log user out
        this.token = null;
        localStorage.removeItem('CRYPLA');
        this.router.navigate(['/auth', 'login']);
    }
    forgotPassword(email: string): Observable<boolean> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post(this.cfg.apiUrl + '/api/auth/restore', JSON.stringify({ email: email}), options)
            .map((response: Response) => {
                let res = response.json();
                console.log(res)
                if (res && res.valid) {
                    return true
                }
                return false
            })
            .catch((error:Response|any)=>{
                console.log(error)
                let errMsg: string;
                if (error instanceof Response) {
                    const body = error.json() || '';
                    const err = body.error || JSON.stringify(body);
                    errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
                } else {
                    errMsg = error.message ? error.message : error.toString();
                }
                console.error(errMsg);
                return Observable.throw(errMsg);
            });
    }
    resetPassword(token: string, password: string): Observable<boolean> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post(this.cfg.apiUrl + '/api/auth/password', JSON.stringify({ hash: token, password: password}), options)
            .map((response: Response) => {
                let res = response.json();
                console.log(res)
                if (res && res.valid) {
                    return true
                }
                return false
            })
            .catch((error:Response|any)=>{
                console.log(error)
                let errMsg: string;
                if (error instanceof Response) {
                    const body = error.json() || '';
                    const err = body.error || JSON.stringify(body);
                    errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
                } else {
                    errMsg = error.message ? error.message : error.toString();
                }
                console.error(errMsg);
                return Observable.throw(errMsg);
            });
    }
    checkHash(token: string): Observable<boolean> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post(this.cfg.apiUrl + '/api/auth/newpass', JSON.stringify({ hash: token}), options)
            .map((response: Response) => {
                let res = response.json();
                console.log(res)
                if (res && res.valid) {
                    return true
                }
                return false
            })
            .catch((error:Response|any)=>{
                console.log(error)
                let errMsg: string;
                if (error instanceof Response) {
                    const body = error.json() || '';
                    const err = body.error || JSON.stringify(body);
                    errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
                } else {
                    errMsg = error.message ? error.message : error.toString();
                }
                console.error(errMsg);
                return Observable.throw(errMsg);
            });
    }
}