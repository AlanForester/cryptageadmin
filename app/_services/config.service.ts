import { Injectable } from '@angular/core';

@Injectable()
export class ConfigService {

    apiUrl: string;
    constructor() {
        this.apiUrl = 'http://10.0.1.150:8089';
        // this.apiUrl = 'http://127.0.0.1:8089';
    }

}