import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';
import { FormControl } from '@angular/forms';
import { LoginService } from './login.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

    
  user = {email: new FormControl(''), password: new FormControl('')};

  constructor(private loginService: LoginService, public snackBar: MatSnackBar, private router: Router) { }


  ngOnInit() {
  }


  onLogIn(){
    this.loginService.logIn(this.user.email.value, this.user.password.value)
    .then(response => {
      this.router.navigate(['home']);
      })
    .catch (
        error => {
          this.snackBar.open(error.message, "close" ,{
            duration: 2000,
            });
        }
    );

  }
}
