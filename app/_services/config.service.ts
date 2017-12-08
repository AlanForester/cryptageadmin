import { Injectable } from '@angular/core';

@Injectable()
export class ConfigService {

    apiUrl: string;
    constructor() {
        this.apiUrl = 'http://10.0.1.103:8089';
    }

}