import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {Title} from '@angular/platform-browser'

// import * as Moment from 'moment';
import {BetweenService} from "../../_services/between.service";


declare var jQuery: any;


@Component({
    moduleId: module.id.toString(),
    selector: 'adminBetween',
    templateUrl: '/app/admin/between/between.html',
    providers: [BetweenService],
})
export class AdminBetween {
    rows: any[] = [];

    timer:any;
    private filters: any;

    constructor(private router: Router, title: Title, private service: BetweenService) {
        title.setTitle("Главная - EmpireCPA");


        jQuery('#preloader').show();
    }

    ngOnInit() {
        this.getData();

        // this.autoOn();

        // Table setup
        // ------------------------------

        // Setting datatable defaults
        jQuery.extend( jQuery.fn.dataTable.defaults, {
            autoWidth: false,
            dom: '<"datatable-header"fl><"datatable-scroll-wrap"t><"datatable-footer"ip>',
            language: {
                search: '<span>Filter:</span> _INPUT_',
                lengthMenu: '<span>Show:</span> _MENU_',
                paginate: { 'first': 'First', 'last': 'Last', 'next': '&rarr;', 'previous': '&larr;' }
            }
            // drawCallback: function () {
            //     jQuery(this).find('tbody tr').slice(-3).find('.dropdown, .btn-group').addClass('dropup');
            // },
            // preDrawCallback: function() {
            //     jQuery(this).find('tbody tr').slice(-3).find('.dropdown, .btn-group').removeClass('dropup');
            // }
        });
        // Save state after reorder

        jQuery('.datatable-div-inside').DataTable({
            dom: '<"datatable-scroll-wrap"t>',
            columnDefs: [
                {targets: [0,1,3], orderable: true, visible: true},
                {targets: [2,4], orderable: false}
            ]
        });

        var table = jQuery('.datatable-div-bellow-paperclip').DataTable({
            rowReorder: {
                selector: 'td:nth-child(1),td:nth-child(2),td:nth-child(3),td:nth-child(4)'
            },
            dom: '<"datatable-scroll-wrap"t>',
            columnDefs: [
                // {targets: 0, orderable: true, visible: false },
                {targets: 0, orderable: true, visible: true },
                {targets: [1,2,3,4], orderable: true, visible: true},
                {targets: 5, orderable: false, visible: true }
            ],
            "columns": [
                { className: "cursor-move" },
                { className: "cursor-move" },
                { className: "cursor-move" },
                { className: "cursor-move" },
                { className: "cursor-move" },
                null
            ]
        });

        console.log(table)
        // Setup event
        table.on('row-reorder', function (e:any, diff:any, edit:any) {
            var result = 'Reorder started on row: ' + edit.triggerRow.data()[1] + '<br>';

            for (var i = 0, ien = diff.length; i < ien; i++) {
                var rowData = table.row(diff[i].node).data();

                result += rowData[1] + ' updated to be in position ' +
                    diff[i].newData + ' (was ' + diff[i].oldData + ')<br>';
            }

            jQuery('#event-result').html('Event result:<br>' + result);
        });

        // External table additions
        // ------------------------------

        // Add placeholder to the datatable filter option
        jQuery('.dataTables_filter input[type=search]').attr('placeholder', 'Type to filter...');


        // Enable Select2 select for the length option
        jQuery('.dataTables_length select').select2({
            minimumResultsForSearch: Infinity,
            width: 'auto'
        });


    }

    ngOnDestroy() {
        this.autoOff();
    }

    autoOn() {
        this.timer = setInterval(()=>{
            this.getData();
        },5000);
    }

    autoOff() {
        if (this.timer) {
            clearInterval(this.timer);
        }
    }

    autoChange(e:boolean) {
        this.autoOff();
        if (e) {
            this.autoOn();
        }
    }

    filterChange(e:any) {
        console.log(e)

        this.filters = e;
        this.getData();
    }

    getData() {
        let s1 = this.service.getDiffs(this.filters).subscribe(
            res => {
                console.log('between', res);
                this.rows = res;
                jQuery('#preloader').hide();
            },
            error => {
                console.log(error)
            }
        );
    }
}
