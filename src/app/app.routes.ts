import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MealsComponent } from './pages/meals/meals.component';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { RoutinesComponent } from './pages/routines/routines.component';
import { SupplementsComponent } from './pages/supplements/supplements.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'exercises', component: RoutinesComponent},
  { path: 'meals', component: MealsComponent},
  { path: 'supplements', component: SupplementsComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'login', component: LoginComponent},
  { path: '**', redirectTo: '404', pathMatch: 'full'}
];
