import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

    
  user = {email: new FormControl(''), password: new FormControl('')};

  constructor(private authService: AuthService, public snackBar: MatSnackBar, private router: Router) { }


  ngOnInit() {
  }


  async onLogIn(){
    this.authService.logIn(this.user.email.value, this.user.password.value).subscribe( (token) =>
      {
      
      
        if (token==null){
          this.snackBar.open('Invalid email or password', 'Close', {duration: 3000});
        }else{
          this.authService.setSession(token);

          let payload = token.access_token.split(".")[1];          
          const id = JSON.parse(window.atob(payload)).id;
          console.log(id)
          this.router.navigate(['/profile/' + id]);
        }
      }
    )
    
  }


}
