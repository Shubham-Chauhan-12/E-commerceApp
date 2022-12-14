import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './Components/admin/admin.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { HeaderComponent } from './Components/header/header.component';
import { UserLoginComponent } from './Components/user-login/user-login.component';
import { UserSignUpComponent } from './Components/user-sign-up/user-sign-up.component';


const routes: Routes = [
  {
    path:"header",
    component:HeaderComponent
  },
  {
    path:"dashboard",
    component:DashboardComponent
  },
  {
    path:"admin",
    component:AdminComponent
  },
  {
    path:"user-login",
    component:UserLoginComponent
  },
  {
    path:"user-sign-up",
    component:UserSignUpComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
