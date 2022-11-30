import { Injectable } from '@angular/core';
import { User } from 'src/app/models/User';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  
  users = [
    { id: 1, email: 'admin@gmail.com', password: 'admin', image:"team-1.jpg" },
    { id: 2, email: 'user@gmail.com', password: 'user' , image:"team-2.jpg" },
  ];
  
  constructor() { }
// return promess to the component
  logIn(email: string, password: string): Promise<User | undefined> {
    if (this.users.some(u => u.email === email && u.password === password)) {
      
      return Promise.resolve(this.users.find(u => u.email === email && u.password === password));
    } else {
      
      return Promise.reject(new Error('Invalid email or password'));
    }
  }

}
