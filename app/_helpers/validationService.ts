import {FormControl} from "@angular/forms";
export class ValidationService {

    static getValidatorErrorMessage(code: string) {
        let config = {
            'required': 'Required',
            'invalidCreditCard': 'Is invalid credit card number',
            'invalidEmailAddress': 'Invalid email address',
            'invalidPassword': 'Invalid password. Password must be at least 6 characters long, and contain a number.',
            'invalidInteger': 'Invalid integer value.',
            'moreThan': 'The value must be greater than.',
            'controlCompare': 'The value not equal.'
        };

        return config[code];
    }

    static creditCardValidator(control: FormControl) {
        // Visa, MasterCard, American Express, Diners Club, Discover, JCB
        if (control.value.match(/^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/)) {
            return null;
        } else {
            return {'invalidCreditCard': true};
        }
    }

    static emailValidator(control: FormControl) {
        // RFC 2822 compliant regex
        if (control.value.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)) {
            return null;
        } else {
            return {'invalidEmailAddress': true};
        }
    }

    static passwordValidator(control: FormControl) {
        // {6,100}           - Assert password is between 6 and 100 characters
        // (?=.*[0-9])       - Assert a string has at least one number
        if (control.value.match(/^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{6,100}$/)) {
            return null;
        } else {
            return {'invalidPassword': true};
        }
    }

    static isNaN(control: FormControl) {
        if (!isNaN(control.value)) {
            return null;
        } else {
            return {'required': true};
        }
    }

    static isInteger(control: FormControl) {
        if (/^\d+$/.test(control.value)) {
            return null;
        } else {
            return {'invalidInteger': true};
        }
    }

    static moreThan(n: number) {
        return (control: FormControl) => {
            var v = control.value;

            if (!Number.isInteger) {
                Number.isInteger = function isInteger(nVal) {
                    return typeof nVal === "number" && isFinite(nVal) && nVal > -9007199254740992 && nVal < 9007199254740992 && Math.floor(nVal) === nVal;
                };
            }

            if (v==null) {
                return {'moreThan': true}

            }

            if (Number.isInteger(v)) {// не работает в IE<12
                return v <= n ?
                    {'moreThan': true} :
                    null;
            }
            else {
                return v.length < n ?
                    {'moreThan': true} :
                    null;
            }
        };
    }

    static lessThan(n: number) {
        return (control: FormControl) => {
            var v = control.value;

            if (Number.isInteger(v)) {
                return v >= n ?
                    {'lessThan': true} :
                    null;
            }
            else {
                return v.length > n ?
                    {'lessThan': true} :
                    null;
            }
        };
    }

    static compare(aname: string, bname: string) {
        return (control: FormControl) => {
            let a = control.parent.get(aname);
            let b = control.parent.get(bname);

            if (a.value == b.value) {
                // @TODO При равенстве полей ошибка не пропадает с первого раза.
                // По этому делаю updateValue.
                // проверить как работает.
                // if (b.hasError('controlCompare')) {
                //     b.reset(b.value);
                // }

                return null;
            }

            b.setErrors({
                'controlCompare': true
            });

            return {'controlCompare': true};
        };
    }
}

export function has_error(c: FormControl) {
    return c && c.errors && c.dirty;
}