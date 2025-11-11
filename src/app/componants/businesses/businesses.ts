import { Component } from '@angular/core';

@Component({
  selector: 'app-businesses',
  imports: [],
  templateUrl: './businesses.html',
  styleUrl: './businesses.css',
})
export class Businesses {

  businesses_list = [
    {
      name : 'Costa',
      town : "Downpatrick",
      rating : 3
    },
    {
      name : 'Audacity',
      town : "Belfast",
      rating : 5
    },
    {
      name : 'Starbucks',
      town : "Carryduff",
      rating : 1
    },
  ]
}
