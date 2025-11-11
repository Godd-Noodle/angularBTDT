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


  constructor(protected businessDataService: BusinessData) {}


  ngOnInit() {
    if (sessionStorage.getItem('page')) {
      this.page = Number(sessionStorage.getItem('page'));
    }



    this.businesses_list = this.businessDataService.getBusinessData(this.page);


  }

  ngOnDestroy() {
    // remove session storage for this page
    if (sessionStorage.getItem('page')){
      sessionStorage.removeItem('page');
    }

  }

  previousPage(){
    if (this.page > 1) {
      this.page = this.page - 1;
      sessionStorage["page"] = this.page
      this.businesses_list = this.businessDataService.getBusinessData(this.page);
    }
  }
  nextPage(){
    if (this.page < this.businessDataService.getLastPageNumber()) {
      this.page = this.page + 1;
      sessionStorage["page"] = this.page
      this.businesses_list = this.businessDataService.getBusinessData(this.page);
    }
  }

}
