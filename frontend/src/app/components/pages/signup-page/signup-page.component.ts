import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ServiceType } from 'src/app/models/ServiceTypes';
import { AuthService } from 'src/app/services/auth.service';
import { ServiceTypeService } from 'src/app/services/service-type.service';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.css']
})
export class SignupPageComponent implements OnInit {
  user = {email: new FormControl(''), password: new FormControl(''), companyName: new FormControl(''),phoneNumber: new FormControl(''),description: new FormControl(''), logo: new FormControl('')};
   types=[];
   selectedType: string
  
  constructor(private authService: AuthService,private serviceTypeService:ServiceTypeService, private router: Router, public snackBar: MatSnackBar) {
  
   }

  ngOnInit() {
    console.log(this.types)
    this.serviceTypeService.getAllServiceTypes().subscribe(
      (data) => {
        console.log("types are " , data);
        for (let id in data){
          this.types.push(data[id].serviceName)
        }
        console.log("types are " , this.types)
        
      }
     );
     
  }
  update(e){
    this.selectedType = e.target.value
    console.log("the selected value is  : " , this.selectedType)
  }
  

  onSignUp(){
    let logo = this.user.logo.value.substring(12)
    return this.authService.signUp( this.user.email.value, 
                                    this.user.password.value,
                                    this.user.companyName.value,
                                    this.selectedType,
                                    this.user.phoneNumber.value,
                                    this.user.description.value,
                                    logo,
                                    "serviceProvider"
                                  ).subscribe(
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
