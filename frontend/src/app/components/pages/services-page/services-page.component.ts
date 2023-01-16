import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';
import { SproviderService } from 'src/app/services/sprovider.service';

@Component({
  selector: 'app-services-page',
  templateUrl: './services-page.component.html',
  styleUrls: ['./services-page.component.css']
})
export class ServicesPageComponent implements OnInit {
  sproviders=[]
  category: string=""
  constructor(private sproviderservice: SproviderService) { }

  ngOnInit() {
    this.sproviderservice.getAllUsers().subscribe(data => {
      for (let id in data){
        this.sproviders.push(data[id])
      }
    })
    console.log(this.sproviders)
  }
  
  selectChangeHandler (event: any) {
    console.log(event.target.value)
    this.category = event.target.value;
    if (this.category ==""){
      
      this.sproviderservice.getAllUsers().subscribe(data => {
        for (let id in data){
          this.sproviders.push(data[id])
        }
      })
    }else{
      this.sproviderservice.getByServiceType(this.category).subscribe(data => {
        for (let id in data){
          this.sproviders.push(data[id])
        }
      })
    }
    console.log(this.sproviders)
  }

}
