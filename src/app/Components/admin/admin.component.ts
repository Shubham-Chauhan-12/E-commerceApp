import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {

  hide = true;

  constructor(private fb: FormBuilder,private router: Router) { }

  adminLoginForm = this.fb.group({
    email: ['',[Validators.required,Validators.email]],
    password: ['',[Validators.required, Validators.pattern(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{5,}$/)]]
  })


  submit(){
    console.log(this.adminLoginForm.value);
    this.router.navigate(['admin-dashboard'])
   

  }

  get email() { return this.adminLoginForm.get("email") }
  get password() { return this.adminLoginForm.get("password") }

}
