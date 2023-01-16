import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import * as moment from "moment";
import { environment } from 'src/environments/environment';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

    private readonly endpoint = 'auth';
    public isLoggedIn$: BehaviorSubject<boolean>;

    constructor(private http: HttpClient) { 
        const isLoggedIn = localStorage.getItem('loggedIn') === 'true';
        this.isLoggedIn$ = new BehaviorSubject(isLoggedIn);
    }

    logIn(email: string, password: string): Observable<any>{
        let res=this.http.post<User>(`${environment.apiUrl}/${this.endpoint}/login`, new User(email, password));
        console.log(res)
        if (res){
            localStorage.setItem('loggedIn', 'true');
            this.isLoggedIn$.next(true);
        }
        return  res              
    }

    signUp(email: string, password: string,companyName:string,serviceType:string,phoneNumber:string,description:string,logo:string,role:string ): Observable<any> {
        let res=this.http.post(`${environment.apiUrl}/${this.endpoint}/signup`, new User(email, password,companyName,serviceType,phoneNumber,description,logo,role));
        if (res){
            localStorage.setItem('loggedIn', 'true');
            this.isLoggedIn$.next(true);
        }
        return  res      
    }

    setSession(token) {
        localStorage.setItem('id_token', token.access_token.split(".")[1]);
    }         

    logout() {
        localStorage.removeItem("id_token");
        localStorage.setItem('loggedIn', 'false');
        this.isLoggedIn$.next(false);
    }

    public isLoggedIn() {
        if (localStorage.getItem("id_token") === null) {
            return false;
        }
        return true
    }

    isLoggedOut() {
        return !this.isLoggedIn();
    }
    isUserLoggedIn(id){
        if (localStorage.getItem('connected')=="false"){
            return false;
        }else{
            let idToken=localStorage.getItem('id_token');
            let lsid = JSON.parse(window.atob(idToken)).id;
            return lsid==id
        }
        
    }
    // getExpiration() {
    //     const expiration = localStorage.getItem("expires_at");
    //     const expiresAt = JSON.parse(expiration);
    //     return moment(expiresAt);
    // }    

  
}