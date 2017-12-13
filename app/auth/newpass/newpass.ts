import {Component} from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from "@angular/router";
import {has_error} from "../../_helpers/validationService";
import {AuthenticationService} from "../../_services/authentication.service";


@Component({
    moduleId: module.id.toString(),
    selector: '.authNewPass.container',
    templateUrl: '/app/auth/newpass/newpass.html',
})

export class AuthNewPass {

    public form: FormGroup;
    public mess:string;
    public token:string;

    constructor(private route: ActivatedRoute, private router: Router, private auth: AuthenticationService) {}

    ngOnInit() {
        this.form = new FormGroup({
            pass: new FormControl({value:'',disabled:true}, Validators.required),
            newpass: new FormControl({value:'',disabled:true}, Validators.required)
        });

        let paramsSub = this.route.params.subscribe((params:any) => {
            this.token = params["token"];
            console.log(params)
            console.log(this.token)
            if (this.token) {
                let s = this.auth.checkHash(this.token).subscribe(
                    result => {
                        if (result === true) {
                            this.form.reset({
                                pass: {value: '', disabled: false},
                                newpass: {value: '', disabled: false}
                            });
                            console.log(this.form.value)
                        }
                    });
            }
        });
    }

    getHasError(key:string) {
        return has_error(<FormControl>this.form.get(key));
    }

    onSubmit() {
        let errauth;
        let self = this;
        if (this.form.valid) {
            this.auth.resetPassword(this.token, this.form.value.pass).subscribe(
                result => {
                    console.log(result)
                    if (result === true) {
                        this.router.navigate(['/auth/login']);
                    }
                },
                error => {
                    console.log('error', error)
                });

            // Accounts.resetPassword(this.token, this.form.value.newpass, function (error) {
            //     if (error) {
            //         self.mess = "Ваш токен не валидный. Смена пароля невозможна.";
            //     } else {
            //         self.router.navigate(['/cabinet/main']);
            //     }
            // })
        }
    }
}