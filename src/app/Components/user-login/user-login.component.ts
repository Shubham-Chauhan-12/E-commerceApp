import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validator, FormBuilder, Validators, AbstractControl } from '@angular/forms'
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/Services/user-service.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {
  hide = true;

  constructor(private fb: FormBuilder,private route:Router,private service:UserServiceService,private _snackBar:MatSnackBar) { }

  userLoginForm = this.fb.group({
    email: ['',[Validators.required,Validators.email]],
    password: ['',[Validators.required]]
  })
 

  submit(){
    
    this.service.userLogin(this.userLoginForm.value).subscribe((data:any) => {
          this.service.loginUser(data.token)
       this._snackBar.open('User-Logged-In', 'successfully', {
        duration: 1500,
        panelClass: ['mat-toolbar', 'mat-warm']
      })
      
      this.route.navigate(['/user-dashboard'])
    },(err:any)=>{

      alert("Invalid Credentials or User Not Registered")
    })
    
  }

  get email() { return this.userLoginForm.get("email") }
  get password() { return this.userLoginForm.get("password") }

}
