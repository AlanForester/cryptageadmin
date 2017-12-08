///<reference path="_models/index.ts"/>

import {NgModule} from '@angular/core';
import {BrowserModule, Title} from '@angular/platform-browser';
import {RouterModule} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {Http, HttpModule} from '@angular/http';


import {EmpireCPA} from './app.component';
import {routes} from './app.routes';
import {MAIN_DECLARATIONS} from "./cabinet/index";
import {PIPES_DECLARATIONS} from "./pipes/index";
import {DIRECTIVES_DECLARATIONS} from "./directives/index";
import {ConfigService} from "./_services/config.service";
import {AuthGuard} from "./_guards/auth.guard";
import {BaseService} from "./_services/base.service";


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        RouterModule.forRoot(routes)
    ],
    declarations: [
        EmpireCPA,
        ...PIPES_DECLARATIONS,
        ...MAIN_DECLARATIONS,
        ...DIRECTIVES_DECLARATIONS

    ],
    providers: [
        Title,
        ConfigService,
        AuthGuard,
        BaseService
    ],
    bootstrap: [
        EmpireCPA
    ]
})
export class EmpireCPAModule {
}