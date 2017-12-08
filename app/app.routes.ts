import { Route } from '@angular/router';

import {Cabinet} from "./cabinet/cabinet.component";
import {cabinetRoutes} from "./cabinet/cabinet.routes";



export const routes: Route[] = [
    {
        path: 'cabinet',
        component: Cabinet,
        children: cabinetRoutes,
        // canActivate: [AuthGuard],
        // canActivateChild: [AuthGuard]
    }, {
        path: '**',
        redirectTo: 'cabinet'
    }

];