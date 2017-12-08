import { Route } from '@angular/router';

import {CabinetMain} from "./main/main";

export const cabinetRoutes: Route[] = [
    {
        path: '',
        component: CabinetMain,
    }, {
        path: 'main',
        redirectTo: ''
    }, {
        path: '**',
        redirectTo: ''
    }

];
