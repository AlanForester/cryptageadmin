import {Component} from '@angular/core';

declare var jQuery: any;

@Component({
    moduleId: module.id.toString(),
    selector: 'cabinet',
    templateUrl: '/app/admin/cabinet.component.html',

})

export class AdminComponent {
    constructor() {}
    ngOnInit() {
        // Calculate min height
        function containerHeight() {
            var availableHeight = jQuery(window).height() - jQuery('.page-container').offset().top - jQuery('.navbar-fixed-bottom').outerHeight();

            jQuery('.page-container').attr('style', 'min-height:' + availableHeight + 'px');
        }

        // Initialize
        containerHeight();

        // -------------------------
        // Mobile sidebar setup
        // -------------------------

        jQuery(window).on('resize', function () {
            setTimeout(function () {
                containerHeight();

                if (jQuery(window).width() <= 768) {

                    // Add mini sidebar indicator
                    jQuery('body').addClass('sidebar-xs-indicator');

                    // Place right sidebar before content
                    jQuery('.sidebar-opposite').insertBefore('.content-wrapper');

                    // Place detached sidebar before content
                    jQuery('.sidebar-detached').insertBefore('.content-wrapper');

                    // Add mouse events for dropdown submenus
                    jQuery('.dropdown-submenu').on('mouseenter', function () {
                        jQuery(this).children('.dropdown-menu').addClass('show');
                    }).on('mouseleave', function () {
                        jQuery(this).children('.dropdown-menu').removeClass('show');
                    });
                }
                else {

                    // Remove mini sidebar indicator
                    jQuery('body').removeClass('sidebar-xs-indicator');

                    // Revert back right sidebar
                    jQuery('.sidebar-opposite').insertAfter('.content-wrapper');

                    // Remove all mobile sidebar classes
                    jQuery('body').removeClass('sidebar-mobile-main sidebar-mobile-secondary sidebar-mobile-detached sidebar-mobile-opposite');

                    // Revert left detached position
                    if (jQuery('body').hasClass('has-detached-left')) {
                        jQuery('.sidebar-detached').insertBefore('.container-detached');
                    }

                    // Revert right detached position
                    else if (jQuery('body').hasClass('has-detached-right')) {
                        jQuery('.sidebar-detached').insertAfter('.container-detached');
                    }

                    // Remove visibility of heading elements on desktop
                    jQuery('.page-header-content, .panel-heading, .panel-footer').removeClass('has-visible-elements');
                    jQuery('.heading-elements').removeClass('visible-elements');

                    // Disable appearance of dropdown submenus
                    jQuery('.dropdown-submenu').children('.dropdown-menu').removeClass('show');
                }
            }, 100);
        }).resize();


    }
}