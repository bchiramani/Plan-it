import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

    
  user = {email: new FormControl(''), password: new FormControl('')};

  constructor(private userService: UserService, public snackBar: MatSnackBar, private router: Router) { }


  ngOnInit() {
  }


  async onLogIn(){
    this.userService.logIn(this.user.email.value, this.user.password.value).subscribe( (token) =>
      {
      
        if (token==null){
          this.snackBar.open('Invalid email or password', 'Close', {duration: 3000});
        }else{
          let payload = token.access_token.split(".")[1];
          const id = JSON.parse(window.atob(payload)).id;
          console.log("id : ", id) ;
          this.router.navigate(['/profile/' + id]);
        }
      }
    )
    
  }


}
