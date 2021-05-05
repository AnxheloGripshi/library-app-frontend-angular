import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { OauthService } from "./oauth.service";

@Injectable({
    providedIn: 'root'
})
export class HttpIntercepterBasicAuthService implements HttpInterceptor {

    constructor(private oauthService: OauthService) {

    }
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        let username = this.oauthService.getAuthenticatedUser();
        let basicAuthHeaderString = this.oauthService.getAuthenticatedToken();
        if (basicAuthHeaderString && username) {
            request = request.clone({
                setHeaders: {
                    Authorization: sessionStorage.getItem('token')
                }
            })
        }
        return next.handle(request);
    }


}