import {Injectable} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {Observer} from "rxjs/Observer";
import {UserService} from "./user.service";
import {AuthenticationService} from "./authentication.service";

@Injectable()
export class ReactiveService {
    userTimer: any;

    public userData: Observable<any>;
    private observer: Observer<any>;

    userLoading: boolean;

    constructor(private US: UserService, private authenticationService: AuthenticationService) {
        this.userData = new Observable((observer: Observer<any>) => {
            this.observer = observer
        }).publish();
        (this.userData as any).connect();

        this.userLoading = true;
        let s = this.US.user().subscribe(res => {
            this.userLoading = false;
            this.observer.next(res)
        }, error => {
            this.userLoading = false;
        });
    }

    startUserData() {
        this.clearUserData();
        let oldVal = '';
        this.userTimer = setInterval(() => {
            if (this.authenticationService.token) {
                if (!this.userLoading) {
                    this.userLoading = true;
                    let s = this.US.user().subscribe(res => {
                        let current = JSON.stringify(res);
                        if (oldVal != current) {
                            oldVal = current;
                            this.observer.next(res)
                        }
                        this.userLoading = false;
                    }, error => {
                        this.userLoading = false;
                    });
                }
            }
        }, 11000)
    }

    clearUserData() {
        if (this.userTimer) {
            clearInterval(this.userTimer);
        }
    }
}