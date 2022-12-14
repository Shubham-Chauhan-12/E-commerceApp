import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-sign-up',
  templateUrl: './user-sign-up.component.html',
  styleUrls: ['./user-sign-up.component.css']
})
export class UserSignUpComponent {

  addressForm = this.fb.group({
    firstName: [null, [Validators.required,Validators.minLength(6)]],
    lastName: [null, [Validators.required,Validators.minLength(6)]],
    mobileNo: [null, [Validators.required,Validators.pattern("[0-9 ]{10}")]],
    emailId: [null, [Validators.required,Validators.email]],
    password: [null, [Validators.required, Validators.pattern(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{5,}$/)]],
    confirmPassword: [null, [Validators.required, Validators.pattern(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{5,}$/)]]
  });

  constructor(private fb: FormBuilder) {}

  onSubmit(): void {
    alert('Thanks!');
  }

  // get firstName() { return this.addressForm.get("firstName") }
}
