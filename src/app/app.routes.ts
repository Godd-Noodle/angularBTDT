import { Routes } from '@angular/router';
import { Home } from './componants/home/home'
import { Businesses} from './componants/businesses/businesses';

export const routes: Routes = [
  {
    path: '',
    component: Home,
  },{
  path: 'businesses',
    component: Businesses,
  }
];
