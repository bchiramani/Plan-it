import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.css']
})
export class SignupPageComponent implements OnInit {
  user = {email: new FormControl(''), password: new FormControl('')};
  constructor(private userService: UserService, private router: Router, public snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  onSignUp(){
    this.userService.signUp(this.user.email.value, this.user.password.value).subscribe(
      token => {
        let payload = token.access_token.split(".")[1];
        const id = JSON.parse(window.atob(payload)).id;
        this.snackBar.open('User Added', 'Awsome', {duration: 1000});
        this.router.navigate(['/profile/'], id);
        }
    );
  }

}
