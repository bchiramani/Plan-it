import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
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
  constructor(private authService: AuthService, private sproviderService : SproviderService ,public snackBar: MatSnackBar, private postService: PostService, private activatedRoute: ActivatedRoute,  private router: Router) { }

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
          this.sprovider=user
          this.logo=`../../../../assets/img/`+this.sprovider.logo;
          console.log(this.sprovider)
          this.postService.getPostsBySProvider(this.sprovider.id).subscribe((data) => 
          {
            this.posts=data;
            console.log("posts at profile ",this.posts)
          }
      )
        }
      )
      console.log(this.sprovider)
    }else{
      this.router.navigate(['**']);
    }
  }


  edit(){
    console.log(this.sprovider)
    this.snackBar.open('edit post', 'edit', {duration: 3000});
  }
  delete(id){
    const snackbarRef = this.snackBar.open('would you like to delete this post ?',"delete", {duration: 3000});
    snackbarRef.onAction().subscribe(() => {
      this.postService.deletePost(id).subscribe(()=>
        {
          this.postService.getPostsBySProvider(this.sprovider.id).subscribe((data) => 
          {
            this.posts=data;
            console.log("posts at profile ",this.posts)
          }
        )
        }
      )
      
    });
  }
    


  }


