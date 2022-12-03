import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/User';
import * as bcrypt from 'bcryptjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  rootURL = 'http://localhost:3000';
  salt = bcrypt.genSaltSync(10);
  
  constructor(private http: HttpClient) { }

  logIn(email: string, password: string): Observable<User> {
    
    var hash = bcrypt.hashSync(password, this.salt);
    return this.http.post<User>(`${this.rootURL}/user/login`, new User(email, hash));
    
  }



  /*addUser(email: string, password: string): Observable<User> {
    var hash = bcrypt.hashSync(password, this.salt);
    return this.http.post<User>(`${this.rootURL}/user/add`, new User(email, hash));
  }*/
  

}
