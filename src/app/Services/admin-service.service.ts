import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { VehiclesData } from '../Model/model';

@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {

  guard:boolean = false;

  constructor(private httpClient :HttpClient) { }

  adminGet():Observable<Array<VehiclesData>>{
    return this.httpClient.get<Array<VehiclesData>>("http://localhost:8086/vehicles/v1/get-vehicle")
  } 

  adminAdd(addData:any):Observable<VehiclesData>{
    return this.httpClient.post<VehiclesData>("http://localhost:8086/vehicles/v1/save-vehicle",addData)
  }

  adminUpdate(upData:any):Observable<VehiclesData>{
    return this.httpClient.put<VehiclesData>("http://localhost:8086/vehicles/v1/update-vehicle",upData)
  }

  adminDel(vId:any):Observable<VehiclesData>{
    return this.httpClient.delete<VehiclesData>("http://localhost:8086/vehicles/v1/delete-vehicle/" + vId)
  }


  
}
