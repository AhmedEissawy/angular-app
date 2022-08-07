import { Component} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  constructor() { }
 property:any={
  "Id":1,
  "Name":"Birla House",
  "Type":"House",
  "Price":12000
 }

}
