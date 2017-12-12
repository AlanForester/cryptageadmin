import { Route } from '@angular/router';
import {AdminMain} from "./main/main";
import {AdminBetween} from "./between/between";

export const adminRoutes: Route[] = [
    {
        path: '',
        component: AdminMain,
    }, {
        path: 'main',
        redirectTo: ''
    }, {
        path: 'between',
        component: AdminBetween,
    }, {
        path: '**',
        redirectTo: ''
    }

];
