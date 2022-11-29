
import { Component,Input, OnInit } from '@angular/core';
import { SProvider } from 'src/app/models/SProvider';

@Component({
  selector: 'app-inversed-card',
  templateUrl: './inversed-card.component.html',
  styleUrls: ['./inversed-card.component.css']
})
export class InversedCardComponent implements OnInit {
  @Input() sprovider: SProvider;
  constructor() { }

  ngOnInit() {
    console.log("inserved card", this.sprovider)
  }

}
