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
  users = [
    { id: 1, email: 'admin@gmail.com', password: 'admin', image:"team-1.jpg" },
    { id: 2, email: 'user@gmail.com', password: 'user' , image:"team-2.jpg" },
  ];
  
  constructor(private http: HttpClient) { }

  logIn(email: string, password: string): Observable<User> {
    var hash = bcrypt.hashSync(password, this.salt);
    return this.http.post<User>(`${this.rootURL}/user/login`, { email, hash });
    
  }


  

}
