import { Routes } from '@angular/router';
import { Dashboard } from './dashboard/dashboard';
import { Home } from './home/home';

export const routes: Routes = [
  // { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
{ path: 'dashboard', component: Dashboard },
{path : "", component:Home},
{ path: 'home', loadComponent: () => import('./home/home').then(m => m.Home) ,},
{ path: 'templates', loadComponent: () => import('./internal-templates/internal-templates').then(m => m.InternalTemplates) },

];
