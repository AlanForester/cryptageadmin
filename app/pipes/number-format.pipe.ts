import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'numberFormat'
})
export class NumberFormatPipe implements PipeTransform {
    transform(value: number, lengthOfDecimal: number = null, sectionsDelimiter: string = null, decimalDelimiter: string = null): string {
        /**
         * @var integer n: length of decimal
         * @var integer x: length of whole part
         * @var mixed   s: sections delimiter
         * @var mixed   c: decimal delimiter
         */
        let n: number = 0;
        let s: string = ',';
        let c: string = '.';

        if (lengthOfDecimal != null) {
            n = Math.max(0, ~~lengthOfDecimal);
        }
        if (sectionsDelimiter != null) {
            s = sectionsDelimiter;
        }
        if (decimalDelimiter != null) {
            c = decimalDelimiter
        }

        let num = (Math.ceil(value * Math.pow(10, n)) / Math.pow(10, n)).toFixed(n);

        let re = '\\d(?=(\\d{3})+' + (n > 0 ? '\\D' : '$') + ')';


        let numStr = num.toString().replace('.', c);


        return numStr.replace(new RegExp(re, 'g'), '$&' + s);
    }
}
