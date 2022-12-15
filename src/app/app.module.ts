import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { HeaderComponent } from './Components/header/header.component';
import { AdminComponent } from './Components/admin/admin.component';
import { UserLoginComponent } from './Components/user-login/user-login.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {ReactiveFormsModule} from '@angular/forms'
import { UserSignUpComponent } from './Components/user-sign-up/user-sign-up.component';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { AdminDashboardComponent } from './Components/admin-dashboard/admin-dashboard.component';
import { AdminAddVehicleComponent } from './Components/admin-add-vehicle/admin-add-vehicle.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserLoginComponent,
    AdminComponent,
    UserSignUpComponent,
    AdminDashboardComponent,
    AdminAddVehicleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatCardModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
