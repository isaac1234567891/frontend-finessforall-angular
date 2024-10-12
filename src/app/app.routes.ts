import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ExercisesComponent } from './pages/exercises/exercises.component';
import { MealsComponent } from './pages/meals/meals.component';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';


export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'exercises', component: ExercisesComponent},
  { path: 'meals', component: MealsComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'login', component: LoginComponent},
  { path: '404', component: PageNotFoundComponent},
  { path: 'dashboard/admin', component: DashboardComponent},
  { path: '**', redirectTo: '404', pathMatch: 'full'},
  { path: '', redirectTo: 'home', pathMatch: 'full'}
];
