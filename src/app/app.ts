import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Businesses} from './componants/businesses/businesses';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Businesses],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angularBTDT');
}
