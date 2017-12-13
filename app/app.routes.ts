import { Route } from '@angular/router';
import {AdminComponent} from "./admin/cabinet.component";
import {adminRoutes} from "./admin/cabinet.routes";
import {Auth} from "./auth/auth.component";
import {authRoutes} from "./auth/auth.routes";
import {AuthGuard} from "./_services/auth.guard";

export const routes: Route[] = [
    {
        path: 'auth',
        component: Auth,
        children: authRoutes
    }, {
        path: 'admin',
        component: AdminComponent,
        children: adminRoutes,
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuard]
    }, {
        path: '**',
        redirectTo: 'admin'
    }
];