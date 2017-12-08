import {NumberFormatPipe} from "./number-format.pipe";
import {DateFormatPipe} from "./date-format.pipe";
import {URLParsePipe} from "./url-parse.pipe";
import {SanitizeHtml} from "./sanitize-html.pipe";
import {OrderByPipe} from "./orderBy.pipe";
import {AbsPipe} from "./abs.pipe";
import {RelativeDatePipe} from "./relative-date.pipe";
import {daysPipe} from "./days.pipe";
import {filterPipe} from "./filter.pipe";

export const PIPES_DECLARATIONS = [
    NumberFormatPipe,
    DateFormatPipe,
    URLParsePipe,
    SanitizeHtml,
    OrderByPipe,
    AbsPipe,
    RelativeDatePipe,
    daysPipe,
    filterPipe
];
