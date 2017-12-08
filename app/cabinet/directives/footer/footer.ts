import {Component} from '@angular/core';

declare var jQuery:any;

@Component({
    moduleId: module.id.toString(),
    selector: 'footer',
    templateUrl: '/app/cabinet/directives/footer/footer.html',
})

export class CabinetFooterDirective {
    // ngAfterContentInit() {
    //     //@TODO Переделать в window.onResize.
    //     (($) => {
    //         var diff = $(window).height() - $(document.body).height(),
    //             $main = $('main');
    //
    //         if (diff > 0) {
    //             $main.css('min-height', $main.height() + diff);
    //         }
    //         else {
    //             $main.css('min-height', 'auto');
    //         }
    //     })(jQuery);
    // }
}