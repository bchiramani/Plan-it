import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';
import { ServiceTypeService } from 'src/app/services/service-type.service';
import { SproviderService } from 'src/app/services/sprovider.service';

@Component({
  selector: 'app-services-page',
  templateUrl: './services-page.component.html',
  styleUrls: ['./services-page.component.css']
})
export class ServicesPageComponent implements OnInit {
  sproviders=[]
  types=[];
   selectedType: string
  constructor(private sproviderservice: SproviderService, private serviceTypeService: ServiceTypeService) { }

  ngOnInit() {
    this.sproviderservice.getAllUsers().subscribe(data => {
      for (let id in data){
        this.sproviders.push(data[id])
      }
    })
    
    this.serviceTypeService.getAllServiceTypes().subscribe(
      (data) => {
        for (let id in data){
          this.types.push(data[id].serviceName)
        }
        
      }
     );
  }
  update(e){
    this.selectedType = e.target.value
    this.sproviders=[]
    if (this.selectedType =="all"||this.selectedType =="" ){
      this.sproviderservice.getAllUsers().subscribe(data => {
        for (let id in data){
          this.sproviders.push(data[id])
        }
      })
    }else{
      console.log("selected type at component : ",this.selectedType)
      this.sproviderservice.getByServiceType(this.selectedType).subscribe(data => {
        for (let id in data){
          this.sproviders.push(data[id])
        }
      })
    }
  }
  
 
}
