import { Injectable } from '@angular/core';
import jsonData from '../../assets/businesses.json'

@Injectable({
  providedIn: 'root',
})

export class BusinessData {




  getBusinessesData(page: number = 1, pageSize : number = 5) {

    let pageStart = (page - 1) * pageSize;
    let pageEnd = pageStart + pageSize;

    //console.log(jsonData.slice(pageStart, pageEnd));
    return jsonData.slice(pageStart, pageEnd);
  }

  getLastPageNumber(pageSize : number = 5) {
    return Math.ceil(jsonData.length / pageSize);
  }

  getBusiness(id : string){

    for (const business of jsonData) {
      if (business._id.$oid == id) return business;
    }
    return {};


  }


  testFunc(){

    throw new Error("not implemented");
  }


}
