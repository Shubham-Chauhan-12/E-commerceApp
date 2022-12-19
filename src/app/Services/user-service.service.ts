import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserModel } from '../Model/userModel';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http:HttpClient) {   }


  register(data:any){

    return this.http.post("http://localhost:8085/register",data)

  }


  userLogin(data:any):any{
    return this.http.post("http://localhost:8085/login", data)
  } 

  loginUser(token: any) {
    localStorage.setItem("token", token);
    return true;
  }

  isLoggedIn() {
    let token = localStorage.getItem("token");
    if (token == undefined || token === "" || token == null) {
      return false;
    }
    else {
      return true;
    }
  }

  logout() {
    localStorage.removeItem('token');
    return true;
  }

  getToken() {
    return localStorage.getItem("token");
  }



  header = new HttpHeaders().set("content-type","Application/Json")

  userGet():Observable<Array<UserModel>>{
    return this.http.get<Array<UserModel>>("http://localhost:8085/api/v1/userview-vehicle" , {headers:this.header})
  } 


} 
