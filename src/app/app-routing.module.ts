import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './Components/admin-dashboard/admin-dashboard.component';
import { AdminComponent } from './Components/admin/admin.component';
import { HeaderComponent } from './Components/header/header.component';
import { UserLoginComponent } from './Components/user-login/user-login.component';
import { UserSignUpComponent } from './Components/user-sign-up/user-sign-up.component';
import { UserdashboardComponent } from './Components/userdashboard/userdashboard.component';
import { AdminGuard } from './Guards/admin.guard';
import { UserGuard } from './Guards/user.guard';


const routes: Routes = [
  {
    path:"",
    redirectTo:"header",pathMatch:"full"
  },
  {
    path:"header",
    component:HeaderComponent
  },
  {
    path:"admin-dashboard",
    // canActivate:[AdminGuard],
    component:AdminDashboardComponent
  },
  {
    path:"admin",
    component:AdminComponent,
    
  },
  {
    path:"user-login",
    component:UserLoginComponent,
  },
  {
    path:"user-sign-up",
    component:UserSignUpComponent
  },
  {
    path:"user-dashboard",
    component:UserdashboardComponent,
    canActivate:[UserGuard],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
