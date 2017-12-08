import {Pipe, PipeTransform} from '@angular/core';


//noinspection TypeScriptUnresolvedFunction
var moment = require('moment');

@Pipe({
    name: 'dateFormat'
})
export class DateFormatPipe implements PipeTransform {
    transform(value: string, format:string) : string {
        return moment(moment(value.replace('+00:00','')).utcOffset(0,true)).utcOffset(3,false).format(format); //todo харкодим московское время
    }
}
