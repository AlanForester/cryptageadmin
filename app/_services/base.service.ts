import {Injectable} from '@angular/core';
import {Http, Headers, Response, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch';
import {ConfigService} from "./config.service";

declare var jQuery: any;


@Injectable()
export class BaseService {

    error:boolean = false;

    // constructor(private http: Http, private authenticationService: AuthenticationService, private cfg: ConfigService) {}
    constructor(private http: Http, private cfg: ConfigService) {}

    httpPost(api: string, data: any): Observable<any> {

        let headers = new Headers({
            'Content-Type': 'application/json',
            // 'Authorization': this.authenticationService.token
        });
        let options = new RequestOptions({headers: headers});

        return this.http.post(this.cfg.apiUrl + api, JSON.stringify(data), options)
            .map((response: Response) => {
                if (this.error) {
                    this.error = false;
                    // window.location.reload();
                    jQuery('#connectionsError').hide()
                }
                return response;
            })
            .catch((error: Response | any) => {
                console.log(error)
                let errMsg: string;

                // if (error.status == 401) {
                //     this.authenticationService.logout();
                // }

                if (error.status == 0) {
                    this.error = true;
                    jQuery('#connectionsError').show()
                }

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