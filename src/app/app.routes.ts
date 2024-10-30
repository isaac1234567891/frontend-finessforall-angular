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
import { RoutinesListComponent } from './pages/routines-list/routines-list.component';
import { SupplementsListComponent } from './pages/supplements-list/supplements-list.component';
import { PageMealsComponent } from './pages/page-meals/page-meals.component';
import { PageRoutinesComponent } from './pages/page-routines/page-routines.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'register', component: RegisterComponent},
  { path: 'login', component: LoginComponent},
  { path: '404', component: PageNotFoundComponent},
  { path: 'page-routines', component: PageRoutinesComponent},
  { path: 'page-meals', component: PageMealsComponent },
  { path: 'dashboard/admin', component: DashboardComponent, canActivate: [authGuard]},
  { path: 'dashboard/supplements', component: SupplementsComponent, canActivate: [authGuard]},
  { path: 'dashboard/supplements-list', component: SupplementsListComponent, canActivate: [authGuard]},
  { path: 'dashboard/exercises', component: RoutinesComponent, canActivate: [authGuard]},
  { path: 'dashboard/exercises-list', component: RoutinesListComponent, canActivate: [authGuard]},
  { path: 'dashboard/meals', component: MealsComponent, canActivate: [authGuard]},
  { path: 'dashboard/meals-list', component: MealsListComponent, canActivate: [authGuard]},
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: '**', redirectTo: '404', pathMatch: 'full'}
];
