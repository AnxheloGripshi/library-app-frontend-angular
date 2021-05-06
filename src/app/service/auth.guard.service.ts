import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { AuthService } from "./auth.service";

@Injectable()
export class AuthGuardService implements CanActivate {

    constructor(public auth: AuthService, public router: Router) { }
    
    canActivate(): boolean {
        if (!this.auth.isUserLoggedIn()) {
            this.router.navigate(['login']);
            console.log("not authenticated")
            return false;
        }
        console.log("authenticated")
        return true;
    }
}