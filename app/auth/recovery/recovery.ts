import {Component} from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {Router} from "@angular/router";
import {ValidationService, has_error} from "../../_helpers/validationService";
import {AuthenticationService} from "../../_services/authentication.service";


@Component({
    moduleId: module.id.toString(),
    selector: '.authRecovery.container',
    templateUrl: '/app/auth/recovery/recovery.html',
})
export class AuthRecovery {
    public form: FormGroup;

    public errorCode: Number;

    constructor(private router: Router, public auth: AuthenticationService) {}

    ngOnInit() {
        this.form = new FormGroup({
            email: new FormControl('', [Validators.required, ValidationService.emailValidator])
        });
    }

    getHasError(key:string) {
        return has_error(<FormControl>this.form.get(key));
    }

    onSubmit() {
        if (this.form.valid && this.errorCode != 200) {
            console.log(this.form)

            this.auth.forgotPassword(this.form.value.email).subscribe(
                result => {
                    console.log(result)
                    if (result === true) {
                        this.router.navigate(['/auth/newpass']);
                    }
                },
                error => {
                    console.log('error', error)
                });

            // new Promise((resolve, reject) => {
            //     Accounts.forgotPassword({
            //         email: this.form.value.email
            //     }, (err) => {
            //         if (err) {
            //             reject(err);
            //         }
            //         else {
            //             resolve();
            //         }
            //     });
            // }).then(() => {
            //     this.errorCode = 200;
            // }).catch((err) => {
            //     this.errorCode = err.error;
            // });
        }
    }
}