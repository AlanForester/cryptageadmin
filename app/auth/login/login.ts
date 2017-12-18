import {Component} from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from "@angular/router";
import {ValidationService, has_error} from "../../_helpers/validationService";

import 'rxjs/add/operator/map'
import {AuthenticationService} from "../../_services/authentication.service";
import {error} from "util";

@Component({
    moduleId: module.id.toString(),
    selector: '.authLogin.container',
    templateUrl: '/app/auth/login/login.html',
})

export class AuthLogin {

    public referer: String;
    public email: String;

    public form: FormGroup;

    public errorCode: Number;

    public error: string = '';

    constructor(private route: ActivatedRoute, private router: Router, private auth: AuthenticationService) {
        if (this.auth.token) {
            this.router.navigate(['/admin']);
        }
    }

    ngOnInit() {

        this.form = new FormGroup({
            userlogin: new FormControl('', Validators.required),
            password: new FormControl('', Validators.required)
        });
    }

    onSubmit() {
        if (this.form.valid) {
            this.errorCode = null;
            this.auth.login(this.form.value.userlogin, this.form.value.password)
                .subscribe(
                    result => {
                        if (result) {
                            if (this.auth.token) {
                                this.router.navigate(['/admin']);
                            }
                        } else {
                            this.error = 'Неверный пользователь или пароль';
                        }
                    },
                    error => {
                        console.log('error', error)
                    });
        }
    }
}