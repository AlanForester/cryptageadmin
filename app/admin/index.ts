import {AdminComponent} from "./cabinet.component";
import {AdminMain} from "./main/main";
import {AdminBetween} from "./between/between";
import {DIRECTIVES_DECLARATIONS} from "./directives/index";
import {ADMIN_COMPONENTS} from "./components/index";
import {AdminInside} from "./inside/inside";
import {AdminPageHeader} from "./components/pageheader/pageheader";
import {AdminSignalInside} from "./signals-inside/signals-inside";
import {AdminEventsInside} from "./events-inside/events-inside";
import {AdminRobot} from "./robots/robots";

export const ADMIN_DECLARATIONS = [
    AdminComponent,
    AdminMain,
    AdminBetween,
    AdminRobot,
    AdminInside,
    AdminSignalInside,
    AdminEventsInside,
    ...DIRECTIVES_DECLARATIONS,
    ...ADMIN_COMPONENTS,
    AdminPageHeader
];
