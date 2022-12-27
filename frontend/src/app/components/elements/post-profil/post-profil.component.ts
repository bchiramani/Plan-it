import { Component , Input } from '@angular/core';
import { Router } from '@angular/router';
import { SProvider } from 'src/app/models/SProvider';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Post } from 'src/app/models/Post';
import { SproviderService } from 'src/app/services/sprovider.service';
@Component({
  selector: 'app-post-profil',
  templateUrl: './post-profil.component.html',
  styleUrls: ['./post-profil.component.css']
})
export class PostProfilComponent {
  @Input() post: Post;
  sprovider: SProvider
  constructor(private router: Router , public snackBar: MatSnackBar,private sproviderService:SproviderService) { }

  ngOnInit() {
    this.sprovider=this.sproviderService.getById(this.post.sproviderId)
  }
  edit(){
    this.snackBar.open('edit post', 'edit', {duration: 3000});
  }
  delete(){
    this.snackBar.open('would you like to delete this post ?',"delete", {duration: 3000});
  }

}
