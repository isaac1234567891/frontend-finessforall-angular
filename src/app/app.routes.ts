import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MealsComponent } from './pages/meals/meals.component';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { RoutinesComponent } from './pages/routines/routines.component';
import { SupplementsComponent } from './pages/supplements/supplements.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { authGuard } from './guards/auth.guard';
import { MealsListComponent } from './pages/meals-list/meals-list.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'supplements', component: SupplementsComponent, canActivate: [authGuard]},
  { path: 'exercises', component: RoutinesComponent, canActivate: [authGuard]},
  { path: 'meals', component: MealsComponent, canActivate: [authGuard]},
  { path: 'meals-list', component: MealsListComponent, canActivate: [authGuard]},
  { path: 'register', component: RegisterComponent},
  { path: 'login', component: LoginComponent},
  { path: '404', component: PageNotFoundComponent},
  { path: 'dashboard/admin', component: DashboardComponent, canActivate: [authGuard]},
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: '**', redirectTo: '404', pathMatch: 'full'}
];
