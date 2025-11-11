import { Injectable } from '@angular/core';
import jsonData from '../../assets/businesses.json'

@Injectable({
  providedIn: 'root',
})

export class BusinessData {
  getBusinessData() {
    return jsonData;
  }
}
