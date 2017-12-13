import { Route } from '@angular/router';

import {AuthLogin} from "./login/login";
import {AuthRecovery} from "./recovery/recovery";
import {AuthRegister} from "./register/register";
import {AuthNewPass} from "./newpass/newpass";


export const authRoutes: Route[] = [
    {
        path: 'login',
        component: AuthLogin,
    }, {
        path: 'recovery',
        component: AuthRecovery,
    }, {
        path: 'register',
        component: AuthRegister
    }, {
        path: 'newpass',
        component: AuthNewPass
    }, {
        path: 'newpass/:token',
        component: AuthNewPass
    }, {
        path: '**',
        redirectTo: 'login'
    }

];