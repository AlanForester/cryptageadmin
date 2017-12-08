import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'days'
})
export class daysPipe implements PipeTransform  {
    transform(c: number): string {
        let s = 'дней';
        if (c<5&&c>20) {
            if (c%10==1)
                s = 'день';
            else
                s = 'дня';
        }
        return ''+c+' '+s;
    }
} 