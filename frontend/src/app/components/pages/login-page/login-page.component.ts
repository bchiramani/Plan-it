import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';


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
    this.loginService.logIn(this.user.email.value, this.user.password.value).subscribe(
      res => {
        if (res != null) {
          this.router.navigate(['/home']);
        } else {
          console.log(res)
          this.snackBar.open('Invalid email or password', 'Close', {duration: 3000});
        }
      }
    );
  }
/*
  onSignUp(){
    this.loginService.addUser(this.user.email.value, this.user.password.value).subscribe(
      res => {
        console.log(res);
        this.snackBar.open('User Added', 'Awsome', {duration: 3000});
        }
    );
  }*/


}
