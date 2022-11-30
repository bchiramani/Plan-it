import { Component, Input, OnInit } from '@angular/core';
import { SProvider } from 'src/app/models/SProvider';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() sprovider:SProvider;
  constructor() { }

  ngOnInit() {
  }

}
