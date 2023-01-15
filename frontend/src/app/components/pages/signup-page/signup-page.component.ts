import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.css']
})
export class SignupPageComponent implements OnInit {
  user = {email: new FormControl(''), password: new FormControl('')};
  constructor(private authService: AuthService, private router: Router, public snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  onSignUp(){
    return this.authService.signUp(this.user.email.value, this.user.password.value).subscribe(
      token => {
        this.authService.setSession(token);
        let payload = token.access_token.split(".")[1];
        const id = JSON.parse(window.atob(payload)).id;
        this.snackBar.open('User Added', 'Awesome', {duration: 1000});
        this.router.navigate(['/profile/'], id);
        }
    );
  }

}
