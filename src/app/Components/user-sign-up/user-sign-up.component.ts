import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/Services/user-service.service';

@Component({
  selector: 'app-user-sign-up',
  templateUrl: './user-sign-up.component.html',
  styleUrls: ['./user-sign-up.component.css']
})
export class UserSignUpComponent {

  addressForm = this.fb.group({
    firstName: [null, [Validators.required, Validators.minLength(2), Validators.pattern('^[a-zA-Z,.!?\\s-]*$')]],
    lastName: [null, [Validators.required, Validators.minLength(4), Validators.pattern('^[a-zA-Z,.!?\\s-]*$')]],
    mobileNo: [null, [Validators.required, Validators.pattern("[0-9 ]{10}")]],
    email: [null, [Validators.required, Validators.email]],
    password: [null, [Validators.required, Validators.minLength(4)]],
    confirmPassword: [null, [Validators.required, Validators.minLength(4)]]
  });


  constructor(private fb: FormBuilder, private route: Router, private service: UserServiceService, private _snackBar: MatSnackBar) { }

  onSubmit() {

    if (this.addressForm.value.password == this.addressForm.value.confirmPassword) {
      this.service.register(this.addressForm.value).subscribe(data => {
        this._snackBar.open('User-Register', 'successfully', {
          duration: 1500,
          panelClass: ['mat-toolbar', 'mat-warm']
        })
      },(err:any)=>{
        alert("Emaild already Exist , Please try again with different Email Id")
      })

      this.route.navigateByUrl("/user-login")
    }
    else {
      alert("Password and Confirm Password Not matched Please try again with same values")
    }

  }

}
