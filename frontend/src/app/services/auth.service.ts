import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import * as moment from "moment";
import { environment } from 'src/environments/environment';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

    private readonly endpoint = 'auth';

    constructor(private http: HttpClient) { }

    logIn(email: string, password: string): Observable<any>{
        return this.http.post<User>(`${environment.apiUrl}/${this.endpoint}/login`, new User(email, password));               
    }

    signUp(email: string, password: string): Observable<any> {
        return this.http.post(`${environment.apiUrl}/${this.endpoint}/signup`, new User(email, password));
    }

    setSession(authResult) {
        const expiresAt = moment().add(authResult.expiresIn,'second');
        localStorage.setItem('id_token', authResult.idToken);
        localStorage.setItem("expires_at", JSON.stringify(expiresAt.valueOf()) );
    }         

    logout() {
        localStorage.removeItem("id_token");
        localStorage.removeItem("expires_at");
    }

    public isLoggedIn() {
        return moment().isBefore(this.getExpiration());
    }

    isLoggedOut() {
        return !this.isLoggedIn();
    }

    getExpiration() {
        const expiration = localStorage.getItem("expires_at");
        const expiresAt = JSON.parse(expiration);
        return moment(expiresAt);
    }    

  
}
