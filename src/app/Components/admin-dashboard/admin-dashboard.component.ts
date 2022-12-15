import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { VehiclesData } from 'src/app/Model/model';
import { AdminServiceService } from 'src/app/Services/admin-service.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit{

  vehicle:VehiclesData[] = []

  constructor(private service:AdminServiceService,private router:Router){

  }
  ngOnInit(): void {
    this.service.adminGet().subscribe(data =>{
      this.vehicle = data

    })
  }

}
