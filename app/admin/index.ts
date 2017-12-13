import {AdminComponent} from "./cabinet.component";
import {AdminMain} from "./main/main";
import {AdminBetween} from "./between/between";
import {DIRECTIVES_DECLARATIONS} from "./directives/index";

export const ADMIN_DECLARATIONS = [
    AdminComponent,
    AdminMain,
    AdminBetween,
    ...DIRECTIVES_DECLARATIONS,
];
