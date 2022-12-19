import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { VehiclesData } from 'src/app/Model/model';
import { UserServiceService } from 'src/app/Services/user-service.service';

@Component({
  selector: 'app-userdashboard',
  templateUrl: './userdashboard.component.html',
  styleUrls: ['./userdashboard.component.css']
})
export class UserdashboardComponent implements OnInit {

  userVehicle: any[] = []

  constructor(private service: UserServiceService, private route: Router, private _snackBar: MatSnackBar) { }



  ngOnInit(): void {
    this.service.userGet().subscribe(data => {
      this.userVehicle = data
    })
  }

  userlogout() {
    this.service.logout()
    this._snackBar.open('User Logout', 'successfully', {
      duration: 1500,
      panelClass: ['mat-toolbar', 'mat-primary']
    })
    this.route.navigateByUrl("/header")
  }


  order(){
    this._snackBar.open(' Wohoo Order Placed ', 'successfully', {
      duration: 2500,
      panelClass: ['mat-toolbar', 'mat-primary']
    })
  }
}
