import { Pipe, PipeTransform } from "@angular/core";
@Pipe({
    name: 'filterBy'
})
export class filterPipe implements PipeTransform {
    transform(array: any[], filterStr: string): string[] {
        console.log(filterStr)
        array.filter((element: any) => {
            return element.title.indexOf(filterStr)>=0;
        });
        return array;
    }
}