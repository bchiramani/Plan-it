import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute} from '@angular/router';
import { Post } from 'src/app/models/Post';
import { AuthService } from 'src/app/services/auth.service';
import { PostService } from 'src/app/services/post.service';
import { SproviderService } from 'src/app/services/sprovider.service';

@Component({
  selector: 'app-add-post-form',
  templateUrl: './add-post-form.component.html',
  styleUrls: ['./add-post-form.component.css']
})
export class AddPostFormComponent  implements OnInit {
  post = {description: new FormControl(''), image: new FormControl('')}
  constructor(private route:ActivatedRoute,public snackBar: MatSnackBar, private postService:PostService, private sproviderService: SproviderService, private authService: AuthService) { }
  ngOnInit() {

  }

  addPost(){
    let userId=this.authService.getIdConnectedUser()
    let description=this.post.description.value
    let image = this.post.image.value.substring(12)
    this.sproviderService.getById(userId).subscribe( (user) => {
      user=user
      console.log ("at component add post :",description, image,user)
      this.postService.addPost(user,description,image).subscribe(data=>{
        console.log("add post component",data)
      })
    })



    
    //console.log(this.postService.addPost(user,description,image))
  // .subscribe(
  //   res => {
  //     if (res != null) {
  //       this.snackBar.open('Post added successfully', 'Close', {duration: 3000});
  //     } else {
  //       console.log(res)
  //       this.snackBar.open('An error has occurred', 'Close', {duration: 3000});
  //     }
  //   }
  // );
  }
}
