import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/models/Post';
import { SProvider } from 'src/app/models/SProvider';
import { User } from 'src/app/models/User';
import { PostService } from 'src/app/services/post.service';
import { SproviderService } from 'src/app/services/sprovider.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profil-page',
  templateUrl: './profil-page.component.html',
  styleUrls: ['./profil-page.component.css']
})
export class ProfilPageComponent {
  sprovider :SProvider;
  posts : Array<Post>;
  constructor(private userService : SproviderService , private postService: PostService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    let id ;
    
    this.activatedRoute.params.subscribe(
      params=>{id=params['id']}
    );
    this.sprovider=this.userService.getById(id)
      console.log(this.sprovider)
    this.posts=this.postService.getSproviderPosts(id)
    console.log(this.posts)
    // queryParams
    // this.route.queryParams.subscribe(params => {
    //   console.log("at details :",params); 
    //   this.user = params
    //   console.log(this.user); 
    //   }
    // );
  }

}
