import { Injectable } from '@angular/core';
import jsonData from '../../assets/businesses.json'

@Injectable({
  providedIn: 'root',
})

export class BusinessData {


  pageSize : number = 5;

  getBusinessData(page: number = 1) {

    let pageStart = (page - 1) * this.pageSize;
    let pageEnd = pageStart + this.pageSize;

    console.log(jsonData.slice(pageStart, pageEnd));
    return jsonData.slice(pageStart, pageEnd);
  }

  getLastPageNumber() {
    return Math.ceil(jsonData.length / this.pageSize);
  }


}
