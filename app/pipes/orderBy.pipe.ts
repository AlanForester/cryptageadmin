import { Pipe, PipeTransform } from "@angular/core";
@Pipe({
    name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {
    transform(array: Array<any>, orderField: string, orderType: boolean): Array<string> {
        array.sort((a: any, b: any) => {

            if (orderField=='epc') {
                if (a.clicks == 0&&b.clicks == 0 ) return 0;
                if (a.clicks == 0 || a.clicks == null || a.clicks.isUndefined) return orderType ?  -1 : 1;
                if (b.clicks == 0 || b.clicks == null || b.clicks.isUndefined) return orderType ? 1 : -1;
                if ((a.f_approved+a.f_pending)/a.clicks < (b.f_approved+b.f_pending)/b.clicks) {
                    return orderType ?  -1 : 1;
                } else {
                    return orderType ? 1 : -1;
                }
            }
            if (orderField=='epc2') {
                if (a.clicks == 0&&b.clicks == 0 ) return 0;
                if (a.clicks == 0 || a.clicks == null || a.clicks.isUndefined) return orderType ?  -1 : 1;
                if (b.clicks == 0 || b.clicks == null || b.clicks.isUndefined) return orderType ? 1 : -1;
                if (a.f_approved/a.clicks < b.f_approved/b.clicks) {
                    return orderType ?  -1 : 1;
                } else {
                    return orderType ? 1 : -1;
                }
            }
            if (orderField=='cr') {
                if (a.clicks == 0&&b.clicks == 0 ) return 0;
                if (a.clicks == 0 || a.clicks == null || a.clicks.isUndefined) return orderType ?  -1 : 1;
                if (b.clicks == 0 || b.clicks == null || b.clicks.isUndefined) return orderType ? 1 : -1;
                if (a.c_all/a.clicks < b.c_all/b.clicks) {
                    return orderType ?  -1 : 1;
                } else {
                    return orderType ? 1 : -1;
                }
            }
            if (orderField=='approve') {
                if (a.c_all == 0 || a.c_all == null || a.c_all.isUndefined) return orderType ?  -1 : 1;
                if (b.c_all == 0 || b.c_all == null || b.c_all.isUndefined) return orderType ? 1 : -1;
                if ((a.c_approved+a.c_pending)/a.c_all < (b.c_approved+b.c_pending)/b.c_all) {
                    return orderType ?  -1 : 1;
                } else {
                    return orderType ?  1 : -1;
                }
            }

            if (orderField=='status') {
                let aStaus = 0;
                if (a.approved)
                    aStaus = 1;
                if (a.rejected)
                    aStaus = 2;
                if (a.trash)
                    aStaus = 3;
                let bStaus = 0;
                if (b.approved)
                    bStaus = 1;
                if (b.rejected)
                    bStaus = 2;
                if (b.trash)
                    bStaus = 3;

                if (aStaus > bStaus) {
                    return orderType ?  1 : -1;
                }
                if (aStaus < bStaus) {
                    return orderType ?  -1 : 1;
                }
            }
            if (orderField=='status') {
                let aStaus = 0;
                if (a.approved)
                    aStaus = 1;
                if (a.rejected)
                    aStaus = 2;
                if (a.trash)
                    aStaus = 3;
                let bStaus = 0;
                if (b.approved)
                    bStaus = 1;
                if (b.rejected)
                    bStaus = 2;
                if (b.trash)
                    bStaus = 3;

                if (aStaus > bStaus) {
                    return orderType ?  1 : -1;
                }
                if (aStaus < bStaus) {
                    return orderType ?  -1 : 1;
                }
            }

            if (a[orderField] == null || a[orderField].isUndefined) return orderType ? 0 - b[orderField] : b[orderField] - 0;
            if (b[orderField] == null || b[orderField].isUndefined) return orderType ? a[orderField] - 0 : b[orderField] - 0;
            // return orderType ? a[orderField] > b[orderField] : b[orderField] > a[orderField];

            if (orderType) {
                if (a[orderField] > b[orderField]) {
                    return 1;
                }
                if (a[orderField] < b[orderField]) {
                    return -1;
                }
            } else  {
                if (a[orderField] > b[orderField]) {
                    return -1;
                }
                if (a[orderField] < b[orderField]) {
                    return 1;
                }
            }
            return 0;
        });
        return array;
    }
}