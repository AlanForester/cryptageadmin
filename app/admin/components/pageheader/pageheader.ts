import {Component, EventEmitter, Input, Output} from "@angular/core";


declare var jQuery: any;


@Component({
    moduleId: module.id.toString(),
    selector: 'admin-page-header',
    templateUrl: '/app/admin/components/pageheader/pageheader.html',
})
export class AdminPageHeader {
    @Input() pageTitle:string;
    @Output() autoChangeEvent:EventEmitter<any> = new EventEmitter();

    auto:boolean = true;

    constructor() {
    }

    ngOnInit() {
        console.log(this.auto)
        this.autoChange(this.auto);
    }

    autoChange(e:boolean) { // открываем уровень подтаблицы
        this.auto = e;
        this.autoChangeEvent.emit(e);
    }

}
