import { Component , Input } from '@angular/core';
import { Router } from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Post } from 'src/app/models/Post';
import { SproviderService } from 'src/app/services/sprovider.service';
import { User } from 'src/app/models/User';
import { PostService } from 'src/app/services/post.service';
@Component({
  selector: 'app-post-profile',
  templateUrl: './post-profile.component.html',
  styleUrls: ['./post-profile.component.css']
})
export class PostProfileComponent {
  @Input() post: Post;
  sprovider: User
  image:string
  constructor(private router: Router , public snackBar: MatSnackBar,private sproviderService:SproviderService, private postService: PostService) { }

  ngOnInit() {
    this.image=`../../../../assets/img/`+this.post.image;
    this.sproviderService.getById(this.post.user.id).subscribe( (user) =>{
        this.sprovider=user
        
      }
      )
  }
 

}
