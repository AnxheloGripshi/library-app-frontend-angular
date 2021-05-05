import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from 'rxjs/operators';
import { LoginData } from "../model/loginData.model";

const URL = 'http://localhost:8080/login'


export const TOKEN = 'token'
export const AUTHENTICATED_USER = 'username'
export const BEARER = "Bearer "

@Injectable({
    providedIn: 'root'
})

export class AuthService {

    constructor(private http: HttpClient) {

    }

    authenticate(loginData: LoginData) {
        return this.http
            .post<any>(URL, loginData)
            .pipe(
                map(userData => {
                    sessionStorage.setItem(AUTHENTICATED_USER, loginData.username);
                    let tokenStr = BEARER + userData.token;
                    sessionStorage.setItem(TOKEN, tokenStr);
                    return userData;
                })
            );
    }


    getAuthenticatedUser() {
        return sessionStorage.getItem(AUTHENTICATED_USER)
    }

    getAuthenticatedToken() {
        if (this.getAuthenticatedUser())
            return sessionStorage.getItem(TOKEN)
        return null
    }

    isUserLoggedIn() {
        let user = sessionStorage.getItem(AUTHENTICATED_USER)
        return !(user === null)
    }

    logout() {
        sessionStorage.removeItem(AUTHENTICATED_USER);
        sessionStorage.removeItem(TOKEN);
    }



}