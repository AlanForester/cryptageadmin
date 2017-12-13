import {Auth} from "./auth.component";
import {AuthLogin} from "./login/login";
import {AuthRecovery} from "./recovery/recovery";
import {AuthRegister} from "./register/register";
import {AuthNewPass} from "./newpass/newpass";

export const AUTH_DECLARATIONS = [
    Auth,
    AuthLogin,
    AuthRecovery,
    AuthRegister,
    AuthNewPass
];
