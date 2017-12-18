import {Component} from '@angular/core';
import {FormGroup, FormControl, Validators, AbstractControl, Validator} from '@angular/forms';
import {ActivatedRoute, Router} from "@angular/router";
import {ValidationService, has_error} from "../../_helpers/validationService";
import {AuthenticationService} from "../../_services/authentication.service";
import {UserService} from "../../_services/user.service";

export class UserValidators extends Validators{

    // inviteIsValid(control: FormControl) {
    //     // return new Promise((resolve) => {
    //     //     Meteor.call('inviteIsValid', control.value, (err, res) => {
    //     //         if (!err && res) {
    //     //             resolve(null);
    //     //         } else {
    //     //             resolve({'inviteIsValid':true});
    //     //         }
    //     //     });
    //     // });
    // }
    static emailAlreadyExist(auth: AuthenticationService) {
        return (c: FormControl) => {
            return new Promise((resolve, reject) => {
                auth.emailAlreadyExist(c.value).subscribe(
                    res => {
                        if (res) {
                            resolve({'emailAlreadyExist': true});
                        } else {
                            resolve(null);
                        }
                    },
                    error => {
                        reject(null);
                    });
            });
        }
    }
    static loginAlreadyExist(auth: AuthenticationService) {
        return (c: FormControl) => {
            return new Promise((resolve, reject) => {
                auth.loginAlreadyExist(c.value).subscribe(
                    res => {
                        if (res) {
                            resolve({'loginAlreadyExist': true});
                        } else {
                            resolve(null);
                        }
                    },
                    error => {
                        reject(null);
                    });
            });
        }
    }

}


@Component({
    moduleId: module.id.toString(),
    selector: '.authRegister.container',
    templateUrl: '/app/auth/register/register.html',
    providers: [UserValidators]
})

export class AuthRegister {
    public form: FormGroup;

    public error: String = '';

    constructor(private router: Router, route: ActivatedRoute, private auth: AuthenticationService) {
        this.form = new FormGroup({
            userlogin: new FormControl('', [Validators.required, ValidationService.moreThan(3)], UserValidators.loginAlreadyExist(auth)),
            email: new FormControl('', [Validators.required, ValidationService.emailValidator], UserValidators.emailAlreadyExist(auth)),
            password: new FormControl('', [Validators.required, ValidationService.moreThan(4)]),
            repeatPassword: new FormControl(''),
        });
        this.form.get('repeatPassword').setValidators([Validators.required, ValidationService.moreThan(4), ValidationService.compare('password', 'repeatPassword')]);
    }

    getControl(key: string) {
        return this.form.get(key);
    }

    getHasError(key: string) {
        return has_error(<FormControl>this.form.get(key));
    }

    onSubmit() {
        if (this.form.valid) {
            let s = this.auth.userCreate(this.form.value).subscribe(
                result => {
                    if (result === true) {
                        this.router.navigate(['/auth/login']);
                    } else {
                        this.error = 'Нельзя создать такого пользователя'
                    }
                },
                error => {
                    console.log('error', error)
                });
        }
    }
}