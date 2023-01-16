import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/User';
import { AuthService } from 'src/app/services/auth.service';
import { PostService } from 'src/app/services/post.service';
import { SproviderService } from 'src/app/services/sprovider.service';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent {
  sprovider :User;
  posts :any;
  logo: string ;
  constructor(private authService: AuthService, private sproviderService : SproviderService , private postService: PostService, private activatedRoute: ActivatedRoute,  private router: Router) { }

  ngOnInit() {
    //get id from url
    let idUrl ;
    this.activatedRoute.params.subscribe(
      params=>{idUrl=params['id']}
    );
    //test if connected ==true and  idUrl is == idToken
    if (this.authService.isUserLoggedIn(idUrl)){
      this.sproviderService.getById(idUrl).subscribe( (user) =>
        {
          console.log("user at profile is : ",user)
          this.sprovider=user
          this.logo=`../../../../assets/img/`+this.sprovider.logo;
          console.log("my logo is ", this.logo)
        }
      )
     
    }else{
      this.router.navigate(['**']);
    }
  }
    

  }


