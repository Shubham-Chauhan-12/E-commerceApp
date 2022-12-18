import { Component, OnInit } from '@angular/core';
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

  constructor(private service: UserServiceService, private route: Router) { }



  ngOnInit(): void {
    this.service.userGet().subscribe(data => {
      this.userVehicle = data
    })
  }

  userlogout() {
    this.service.logout()
    this.route.navigateByUrl("/header")
  }
}
