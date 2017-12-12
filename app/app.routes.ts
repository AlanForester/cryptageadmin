import { Route } from '@angular/router';
import {AdminComponent} from "./admin/cabinet.component";
import {adminRoutes} from "./admin/cabinet.routes";

export const routes: Route[] = [
    {
        path: 'admin',
        component: AdminComponent,
        children: adminRoutes
    }, {
        path: '**',
        redirectTo: 'admin'
    }
];