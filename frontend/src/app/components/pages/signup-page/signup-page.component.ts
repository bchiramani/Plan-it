import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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
  user = new FormGroup({
      email: new FormControl(''), 
      password: new FormControl(''), 
      companyName: new FormControl(''),
      phoneNumber: new FormControl(''),
      description: new FormControl(''), 
      logo: new FormControl('')
  });
   types=[];
   selectedType
  
  constructor(private authService: AuthService,private serviceTypeService:ServiceTypeService, private router: Router, public snackBar: MatSnackBar ,private fb: FormBuilder) {
  
   }

  ngOnInit() {
    this.user= this.fb.group({
      email: ['',[Validators.required,Validators.email]], 
      password:['',[Validators.required,Validators.minLength(4)]], 
      companyName:  ['',[Validators.required,Validators.minLength(3)]], 
      phoneNumber: ['',[Validators.required]],
      description: ['',[Validators.required]], 
      logo: ['',[]]
    })
    console.log(this.types)
    this.serviceTypeService.getAllServiceTypes().subscribe(
      (data) => {
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
    let logo = this.user.value.logo.substring(12)
    let st
    this.serviceTypeService.getServiceTypeByName(this.selectedType).subscribe(data => {
      st=data
    })
    return  this.authService.signUp( 
      this.user.value.email, 
      this.user.value.password,
      this.user.value.companyName,
      st,
      this.user.value.phoneNumber,
      this.user.value.description,
      logo,
      "serviceProvider"
    ).subscribe(
        token => {
        this.authService.setSession(token);
        let payload = token.access_token.split(".")[1];
        const id = JSON.parse(window.atob(payload)).id;
        console.log(id)
        this.snackBar.open('User Added', 'Awesome', {duration: 1000});
        this.router.navigate([`/profile/${id}`]);
        }
    );
  }
 
    

}
