import {Pipe, PipeTransform} from '@angular/core';


import * as Moment from 'moment';
import 'moment/locale/ru';

@Pipe({
    name: 'relativeDate'
})
export class RelativeDatePipe implements PipeTransform {
    transform(value: string) : string {
        return Moment(Moment(value.replace('+00:00','')).utcOffset(0,true)).utcOffset(3,false).locale('ru').fromNow(); //todo харкодим московское время
    }
}
