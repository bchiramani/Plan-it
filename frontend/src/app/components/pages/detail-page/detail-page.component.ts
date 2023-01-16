import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/User';
import { PostService } from 'src/app/services/post.service';
import { SproviderService } from 'src/app/services/sprovider.service';

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.css']
})
export class DetailPageComponent implements OnInit {
  sprovider : any;
  posts : any;
  constructor(private sproviderService : SproviderService, private postService : PostService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    let id ;
    
    this.activatedRoute.params.subscribe(
      params => { id = params['id'] }
    );
    
    this.sproviderService.getById(id).subscribe( (user) =>
        {console.log("user at profile is : ",user)
        this.sprovider=user}
      )
      console.log(this.sprovider)

      this.postService.getPostsBySProvider(id).subscribe(
        (data) => {
          this.posts=data;
        }
      )
    // queryParams
    // this.route.queryParams.subscribe(params => {
    //   console.log("at details :",params); 
    //   this.user = params
    //   console.log(this.user); 
    //   }
    // );
  }

}
