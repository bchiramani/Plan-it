import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly endpoint = 'auth';

  constructor(private http: HttpClient) { }

  logIn(email: string, password: string): Observable<any> {
    
    return this.http.post(`${environment.apiUrl}/${this.endpoint}/login`, new User(email, password));
    
  }



  signUp(email: string, password: string): Observable<any> {

    return this.http.post(`${environment.apiUrl}/${this.endpoint}/signup`, new User(email, password));
  }
  
}
