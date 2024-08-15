import { Routes } from '@angular/router';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [

    {
        path: 'login',
        loadComponent: () => import('./pages/login/login.component').then(m => m.LoginComponent)
    },
    {
        path: 'home',
        loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent),
        canMatch:[authGuard]
    },

    { path:'', pathMatch: 'full', redirectTo: 'login' },
    {
        path: '**',
        loadComponent: () => import('./pages/login/login.component').then(m => m.LoginComponent)
    },
];
