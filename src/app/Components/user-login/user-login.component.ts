import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validator, FormBuilder, Validators, AbstractControl } from '@angular/forms'

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {
  hide = true;

  constructor(private fb: FormBuilder) { }

  userLoginForm = this.fb.group({
    email: ['',[Validators.required,Validators.email]],
    password: ['',[Validators.required, Validators.pattern(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{5,}$/)]]
  })
 

  submit(){
    console.log(this.userLoginForm.value);
    
  }

  get email() { return this.userLoginForm.get("email") }
  get password() { return this.userLoginForm.get("password") }

}
