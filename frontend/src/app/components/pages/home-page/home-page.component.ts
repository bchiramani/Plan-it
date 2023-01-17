import { Component, OnInit } from '@angular/core';
import { ServiceTypeService } from 'src/app/services/service-type.service';
import { SproviderService } from 'src/app/services/sprovider.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  types: string[];

  constructor(private sproviderservice: SproviderService,private serviceTypeService: ServiceTypeService) { }

  ngOnInit() {

    this.serviceTypeService.getAllServiceTypes().subscribe(
      (data) => {
        for (let id in data){
          this.types.push(data[id].serviceName)
        }
        
      }
     );

  }

}
