import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { VehiclesData } from '../Model/model';

@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {

  constructor(private httpClient :HttpClient) { }

  adminGet():Observable<Array<VehiclesData>>{
    return this.httpClient.get<Array<VehiclesData>>("http://localhost:9000/vehicles/v1/get-vehicle")
  }
}
