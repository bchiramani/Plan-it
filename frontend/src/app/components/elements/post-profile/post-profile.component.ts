import { Component , Input } from '@angular/core';
import { Router } from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Post } from 'src/app/models/Post';
import { SproviderService } from 'src/app/services/sprovider.service';
import { User } from 'src/app/models/User';
@Component({
  selector: 'app-post-profile',
  templateUrl: './post-profile.component.html',
  styleUrls: ['./post-profile.component.css']
})
export class PostProfileComponent {
  @Input() post: Post;
  sprovider: User
  constructor(private router: Router , public snackBar: MatSnackBar,private sproviderService:SproviderService) { }

  ngOnInit() {
    this.sproviderService.getById(this.post.user.id).subscribe( (user) =>
        {console.log("user at profile is : ",user)
        this.sprovider=user}
      )
  }
  edit(){
    this.snackBar.open('edit post', 'edit', {duration: 3000});
  }
  delete(){
    this.snackBar.open('would you like to delete this post ?',"delete", {duration: 3000});
  }

}
