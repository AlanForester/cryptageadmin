///<reference path="_models/index.ts"/>

import {NgModule} from '@angular/core';
import {BrowserModule, Title} from '@angular/platform-browser';
import {RouterModule} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {Http, HttpModule} from '@angular/http';


import {CRYPLA} from './app.component';
import {routes} from './app.routes';
import {ADMIN_DECLARATIONS} from "./admin/index";
import {PIPES_DECLARATIONS} from "./pipes/index";
import {DIRECTIVES_DECLARATIONS} from "./directives/index";
import {ConfigService} from "./_services/config.service";
import {AuthGuard} from "./_services/auth.guard";
import {BaseService} from "./_services/base.service";
import {AUTH_DECLARATIONS} from "./auth/index";
import {AuthenticationService} from "./_services/authentication.service";
import {ReactiveService} from "./_services/reactive.service";
import {UserService} from "./_services/user.service";



@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        RouterModule.forRoot(routes)
    ],
    declarations: [
        CRYPLA,
        ...ADMIN_DECLARATIONS,
        ...AUTH_DECLARATIONS,
        ...DIRECTIVES_DECLARATIONS,
        ...PIPES_DECLARATIONS
    ],
    providers: [
        Title,
        ConfigService,
        AuthGuard,
        AuthenticationService,
        BaseService,
        UserService,
        ReactiveService
    ],
    bootstrap: [
        CRYPLA
    ]
})
export class CRYPLAModule {
}