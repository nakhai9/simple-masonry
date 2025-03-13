import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./features/home/home.component').then((c) => c.HomeComponent),
  },
  {
    path: 'home',
    loadComponent: () =>
      import('./features/home/home.component').then((c) => c.HomeComponent),
  },
  {
    path: 'profile',
    loadComponent: () =>
      import('./features/profile/profile.component').then(
        (c) => c.ProfileComponent
      ),
  },
  {
    path: 'profile/:id',
    loadComponent: () =>
      import('./features/profile/profile.component').then(
        (c) => c.ProfileComponent
      ),
  },
];
