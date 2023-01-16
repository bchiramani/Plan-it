import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {  
  constructor(private router: Router,public authService: AuthService) { }

  ngOnInit() {

  }
  
  logout() {
    this.authService.logout()
   }
  goToAccount() {
    let idToken=localStorage.getItem('id_token');
    let id = JSON.parse(window.atob(idToken)).id;
    this.router.navigate(['/profile/' + id]);
   
   }

}
