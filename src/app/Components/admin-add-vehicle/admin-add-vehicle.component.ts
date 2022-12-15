import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin-add-vehicle',
  templateUrl: './admin-add-vehicle.component.html',
  styleUrls: ['./admin-add-vehicle.component.css']
})
export class AdminAddVehicleComponent {

  

  constructor(private fb: FormBuilder) { }

  addVehicleForm = this.fb.group({
    vehicleId: [null,[Validators.required,Validators.pattern(/^[0-9]\d*$/),Validators.maxLength(3)]],
    vehicleBrand:['',[Validators.required,Validators.minLength(2)]],
    vehicleModel:['',[Validators.required,Validators.minLength(2)]],
    vehicleVariant:['',[Validators.required,Validators.minLength(2)]],
    vehicleColor:['',[Validators.required,Validators.minLength(4)]],
    manufactureYear:[null,[Validators.required,Validators.pattern(/^[0-9]\d*$/),Validators.maxLength(4)]],
    price:[null,[Validators.required,Validators.pattern(/^[0-9]\d*$/)]]

  })
 

  submit(){
    console.log(this.addVehicleForm.value);
    
  }

  get vehicleId() { return this.addVehicleForm.get("vehicleId") }
  get vehicleBrand() { return this.addVehicleForm.get("vehicleBrand") }
  get vehicleModel() { return this.addVehicleForm.get("vehicleModel") }
  get vehicleVariant() { return this.addVehicleForm.get("vehicleVariant") }
  get vehicleColor() { return this.addVehicleForm.get("vehicleColor") }
  get manufactureYear() { return this.addVehicleForm.get("manufactureYear") }
  get price() { return this.addVehicleForm.get("price") }

}
