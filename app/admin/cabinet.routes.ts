import { Route } from '@angular/router';
import {AdminMain} from "./main/main";
import {AdminBetween} from "./between/between";
import {AdminInside} from "./inside/inside";
import {AdminSignalInside} from "./signals-inside/signals-inside";

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
        path: 'inside',
        component: AdminInside,
    }, {
        path: 'signals/inside',
        component: AdminSignalInside,
    }, {
        path: '**',
        redirectTo: ''
    }

];
