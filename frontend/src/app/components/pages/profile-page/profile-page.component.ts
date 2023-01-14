import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/models/User';
import { PostService } from 'src/app/services/post.service';
import { SproviderService } from 'src/app/services/sprovider.service';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent {
  sprovider : User;
  posts :any;
  constructor(private sproviderService : SproviderService , private postService: PostService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    let id ;
    
    this.activatedRoute.params.subscribe(
      params=>{id=params['id']}
    );
    this.sprovider=this.sproviderService.getById(id)
      console.log(this.sprovider)
    this.postService.getPostsBySProvider(id).subscribe(
      (data) => {
        this.posts=data;
      }
    )
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
