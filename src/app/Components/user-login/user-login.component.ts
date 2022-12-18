import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validator, FormBuilder, Validators, AbstractControl } from '@angular/forms'
import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/Services/user-service.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {
  hide = true;

  constructor(private fb: FormBuilder,private route:Router,private service:UserServiceService) { }

  userLoginForm = this.fb.group({
    email: ['',[Validators.required,Validators.email]],
    password: ['',[Validators.required, Validators.pattern(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{5,}$/)]]
  })
 

  submit(){
    
    this.service.userLogin(this.userLoginForm.value).subscribe((data:any) => {
      this.service.loginUser(data.token)
      this.route.navigate(['/user-dashboard'])
    })
    
  }

  get email() { return this.userLoginForm.get("email") }
  get password() { return this.userLoginForm.get("password") }

}
