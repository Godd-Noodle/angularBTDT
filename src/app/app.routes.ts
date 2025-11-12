import { Routes } from '@angular/router';
import { Home } from './componants/home/home'
import { Businesses} from './componants/businesses/businesses';
import { Business} from './componants/business/business';

export const routes: Routes = [
  {
    path: '',
    component: Home,
  },{
  path: 'businesses',
    component: Businesses,
  },
  {
    path: 'businesses/:id',
    component: Business,
  }
];
