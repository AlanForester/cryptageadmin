import {Pipe, PipeTransform} from '@angular/core';


import * as Moment from 'moment';
import 'moment/locale/ru';

@Pipe({
    name: 'relativeDate'
})
export class RelativeDatePipe implements PipeTransform {
    transform(value: string) : string {
        return Moment(Moment(value).utcOffset(0, true)).locale('ru').fromNow();
    }
}
