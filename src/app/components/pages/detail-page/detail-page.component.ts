import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SProvider } from 'src/app/models/SProvider';
import { SproviderService } from 'src/app/services/sprovider.service';

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.css']
})
export class DetailPageComponent implements OnInit {
  sprovider :SProvider;
  constructor(private sproviderService : SproviderService , private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    let id ;
    
    this.activatedRoute.params.subscribe(
      params=>{id=params['id']}
    );
    this.sprovider=this.sproviderService.getById(id)
      console.log(this.sprovider)
    // queryParams
    // this.route.queryParams.subscribe(params => {
    //   console.log("at details :",params); 
    //   this.user = params
    //   console.log(this.user); 
    //   }
    // );
  }

}
