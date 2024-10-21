import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MealsComponent } from './pages/meals/meals.component';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
<<<<<<< HEAD
import { RoutinesComponent } from './pages/routines/routines.component';
import { SupplementsComponent } from './pages/supplements/supplements.component';
=======
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { authGuard } from './guards/auth.guard';

>>>>>>> 27fc829742dc4f5ac99ab4053044a1193b9d1942

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
<<<<<<< HEAD
  { path: 'exercises', component: RoutinesComponent},
  { path: 'meals', component: MealsComponent},
  { path: 'supplements', component: SupplementsComponent},
=======
  { path: 'exercises', component: ExercisesComponent,canActivate: [authGuard]},
  { path: 'meals', component: MealsComponent, canActivate: [authGuard]},
>>>>>>> 27fc829742dc4f5ac99ab4053044a1193b9d1942
  { path: 'register', component: RegisterComponent},
  { path: 'login', component: LoginComponent},
  { path: '404', component: PageNotFoundComponent},
  { path: 'dashboard/admin', component: DashboardComponent, canActivate: [authGuard]},
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: '**', redirectTo: '404', pathMatch: 'full'}
];
