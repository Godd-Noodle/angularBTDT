import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Businesses} from './componants/businesses/businesses';
import jsonData from '../assets/businesses.json'

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Businesses],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angularBTDT');

  ngOnInit() {
    console.log(jsonData);
  }
}
