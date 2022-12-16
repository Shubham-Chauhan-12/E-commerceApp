import { Component } from '@angular/core';
import { VehiclesData } from 'src/app/Model/model';

@Component({
  selector: 'app-userdashboard',
  templateUrl: './userdashboard.component.html',
  styleUrls: ['./userdashboard.component.css']
})
export class UserdashboardComponent {

  vehicle: VehiclesData[] = [{
    "vehicleId": 100,
    "vehicleBrand": "Vw",
    "vehicleModel": "Po",
    "vehicleVariant": "Diesel",
    "vehicleColor": "Red",
    "manufactureYear": 2020,
    "price": 800,
    "emailOfAdmin": "shubham@email.com",
    "passwordOfAdmin": "pb@123"
  }, {
    "vehicleId": 101,
    "vehicleBrand": "Vw",
    "vehicleModel": "Polo",
    "vehicleVariant": "Diesel",
    "vehicleColor": "Red",
    "manufactureYear": 2020,
    "price": 800000,
    "emailOfAdmin": "shubham@email.com",
    "passwordOfAdmin": "pb@123"
  }]

}
