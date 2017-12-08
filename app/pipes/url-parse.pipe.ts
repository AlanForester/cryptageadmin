import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'urlParse'
})
export class URLParsePipe implements PipeTransform {

    private link = <HTMLAnchorElement>document.createElement('a');

    transform(value: string, format:string) : string {
        this.link.href = value;

        return this.link[format];
    }
}
