import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';
import { SproviderService } from 'src/app/services/sprovider.service';

@Component({
  selector: 'app-services-page',
  templateUrl: './services-page.component.html',
  styleUrls: ['./services-page.component.css']
})
export class ServicesPageComponent implements OnInit {
  sproviders:Array<User>
  category: string=""
  constructor(private sproviderservice: SproviderService) { }

  ngOnInit() {
    this.sproviders = this.sproviderservice.getAll()
    console.log(this.sproviders)
  }
  
  selectChangeHandler (event: any) {
    console.log(event.target.value)
    this.category = event.target.value;
    if (this.category ==""){
      
      this.sproviders = this.sproviderservice.getAll()
    }else{
      this.sproviders = this.sproviderservice.getByCategory(this.category)
    }
    console.log(this.sproviders)
  }

}
