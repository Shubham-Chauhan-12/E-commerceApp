import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { VehiclesData } from 'src/app/Model/model';
import { AdminServiceService } from 'src/app/Services/admin-service.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent {

  vehicle : VehiclesData[] =[]

  constructor(private service:AdminServiceService,private router:Router ,private fb: FormBuilder ){}


  editVehicleForm = this.fb.group({
    vehicleId: [null, [Validators.required, Validators.pattern(/^[0-9]\d*$/), Validators.maxLength(3)]],
    vehicleBrand: ['', [Validators.required, Validators.minLength(2)]],
    vehicleModel: ['', [Validators.required, Validators.minLength(2)]],
    vehicleVariant: ['', [Validators.required, Validators.minLength(2)]],
    vehicleColor: ['', [Validators.required, Validators.minLength(4)]],
    manufactureYear: [null, [Validators.required, Validators.pattern(/^[0-9]\d*$/), Validators.maxLength(4)]],
    price: [null, [Validators.required, Validators.pattern(/^[0-9]\d*$/)]]

  })

  addVehicleForm = this.fb.group({
    vehicleId: [null, [Validators.required, Validators.pattern(/^[0-9]\d*$/), Validators.maxLength(3)]],
    vehicleBrand: ['', [Validators.required, Validators.minLength(2)]],
    vehicleModel: ['', [Validators.required, Validators.minLength(2)]],
    vehicleVariant: ['', [Validators.required, Validators.minLength(2)]],
    vehicleColor: ['', [Validators.required, Validators.minLength(4)]],
    manufactureYear: [null, [Validators.required, Validators.pattern(/^[0-9]\d*$/), Validators.maxLength(4)]],
    price: [null, [Validators.required, Validators.pattern(/^[0-9]\d*$/)]]

  })



  submit(){
    this.service.adminUpdate(this.editVehicleForm.value).subscribe(data => {
      alert("updated")
    })
  }


  ngOnInit(): void {
    this.service.adminGet().subscribe(data =>{
      this.vehicle = data
    })
  }


  addSubmit(){
    this.service.adminAdd(this.addVehicleForm.value).subscribe(data => {
      console.log(data)
    })
  }


  // delSubmit(){
  //   this.service.adminDel()
  // }

  deleteB(vehicleId:any){

    this.service.adminDel(vehicleId).subscribe(data => {
      console.log(vehicleId);
    })
    

  }

}


