import {Component} from '@angular/core';
import {FormGroup, FormControl, Validators, AbstractControl, Validator} from '@angular/forms';
import {ActivatedRoute, Router} from "@angular/router";
import {ValidationService, has_error} from "../../_helpers/validationService";
import {AuthenticationService} from "../../_services/authentication.service";
import {UserService} from "../../_services/user.service";

export class UserValidators extends Validators{

    inviteIsValid(control: FormControl) {
        // return new Promise((resolve) => {
        //     Meteor.call('inviteIsValid', control.value, (err, res) => {
        //         if (!err && res) {
        //             resolve(null);
        //         } else {
        //             resolve({'inviteIsValid':true});
        //         }
        //     });
        // });
    }
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
            username: new FormControl('', [Validators.required, ValidationService.moreThan(3)]),
            email: new FormControl('', [Validators.required, ValidationService.emailValidator], UserValidators.emailAlreadyExist(auth)),
            // invite: new FormControl(''),
            skype: new FormControl('', Validators.required),
            password: new FormControl('', [Validators.required, ValidationService.moreThan(4)]),
            repeatPassword: new FormControl(''),
        });
        this.form.get('repeatPassword').setValidators([Validators.required, ValidationService.moreThan(4), ValidationService.compare('password', 'repeatPassword')]);


        let rout = route.queryParams.subscribe((params: any) => {
            var obj = {};
            if (params.wm_nick || params.wm_email || params.wm_password || params.wm_skype) {
                if (params.wm_nick) {
                    obj["username"] = params.wm_nick;
                }
                if (params.wm_email) {
                    obj["email"] = params.wm_email;
                }
                if (params.wm_password) {
                    obj["password"] = params.wm_password;
                    obj["repeatPassword"] = params.wm_password;
                }
                if (params.wm_skype) {
                    obj["skype"] = params.wm_skype;
                }
                if (Object.keys(obj).length >= 4) {
                    this.onSubmit(obj);
                }
            }
        });
    }

    getControl(key: string) {
        return this.form.get(key);
    }

    getHasError(key: string) {
        return has_error(<FormControl>this.form.get(key));
    }

    onSubmit(force?: any) {
        if (this.form.valid || force) {
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