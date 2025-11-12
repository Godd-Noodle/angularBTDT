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
  page = 1
  per_page = 5


  constructor(protected businessDataService: BusinessData) {}


  ngOnInit() {
    if (sessionStorage.getItem('businesses_page')) {
      this.page = Number(sessionStorage.getItem('businesses_page'));
    }
    if (sessionStorage.getItem('businesses_per_page')) {
      this.per_page = Number(sessionStorage.getItem('businesses_per_page'));
    }

    //delete all sessions
    sessionStorage.clear()

    //add back sessions used by this page
    sessionStorage.setItem('businesses_page', String(this.page));
    sessionStorage.setItem('businesses_per_page', String(this.per_page));


    this.businesses_list = this.businessDataService.getBusinessesData(this.page);


  }



  previousPage(){
    if (this.page > 1) {
      this.page = this.page - 1;
      sessionStorage.setItem("businesses_page", String(this.page));
      this.businesses_list = this.businessDataService.getBusinessesData(this.page);
    }
  }
  nextPage(){
    if (this.page < this.businessDataService.getLastPageNumber()) {
      this.page = this.page + 1;
      sessionStorage.setItem("businesses_page", String(this.page));
      this.businesses_list = this.businessDataService.getBusinessesData(this.page);
    }
  }

}
