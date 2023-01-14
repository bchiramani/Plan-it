import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute} from '@angular/router';
import { Post } from 'src/app/models/Post';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-add-post-form',
  templateUrl: './add-post-form.component.html',
  styleUrls: ['./add-post-form.component.css']
})
export class AddPostFormComponent {
  post = {description: new FormControl(''), image: new FormControl('')}
  constructor(private route:ActivatedRoute,public snackBar: MatSnackBar, private postService:PostService) { }


  addPost(){
    let userId
    this.route.paramMap.subscribe( paramMap => {
      userId= Number(paramMap.get('id'));
    })
    let description=this.post.description.value
    let image=this.post.image.value
    console.log(this.postService.addPost(userId,description,image))
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
