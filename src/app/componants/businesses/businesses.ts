import { Component } from '@angular/core';
import {BusinessData} from '../../services/business-data'

@Component({
  selector: 'app-businesses',
  imports: [],
  providers: [BusinessData],
  templateUrl: './businesses.html',
  styleUrl: './businesses.css',
})
export class Businesses {

  businesses_list : any = []


  constructor(private businessDataService: BusinessData) {}


  ngOnInit() {
    this.businesses_list = this.businessDataService.getBusinessData();
  }
}
