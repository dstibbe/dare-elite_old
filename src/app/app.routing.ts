import { Routes, RouterModule, PreloadAllModules  } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { PagesComponent } from './pages/pages.component';
import { NotFoundComponent } from './pages/errors/not-found/not-found.component';
import { ErrorComponent } from './pages/errors/error/error.component';
import { LoginComponent } from './authentication/components/login/login.component';
import { RegisterComponent } from './authentication/components/register/register.component';
import { AuthGuard } from './authentication/guards/auth.guard';

export const routes: Routes = [
    {
        path: '',
        component: PagesComponent, children: [
            { path: '', loadChildren: './pages/dashboard/dashboard.module#DashboardModule', data: { breadcrumb: 'Dashboard' } },
            { path: 'users', loadChildren: './pages/users/users.module#UsersModule', data: { breadcrumb: 'Users' } },
            { path: 'crm', loadChildren: './pages/landen/landen.module#LandenModule', data: { breadcrumb: 'CRM'}, canActivate: [AuthGuard]  }
        ]
    },
    { path: 'landing', loadChildren: './pages/landing/landing.module#LandingModule' },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'error', component: ErrorComponent, data: { breadcrumb: 'Error' } },
    { path: '**', component: NotFoundComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, {
   preloadingStrategy: PreloadAllModules,  // <- comment this line for activate lazy load
   // useHash: true
});
