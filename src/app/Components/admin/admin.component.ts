import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Route, Router } from '@angular/router';
import { AdminServiceService } from 'src/app/Services/admin-service.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {

  hide = true;

  constructor(private fb: FormBuilder, private router: Router, private service: AdminServiceService, private _snackBar: MatSnackBar) { }

  adminLoginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(5)]]
  })


  adminLogin() {
    if (this.email?.value == "shubham@email.com" && this.password?.value == "Pb@123") {
      this.service.guard = true
      this._snackBar.open('Admin-logged-In', 'successfully', {
        duration: 3000,
        panelClass: ['mat-toolbar', 'mat-accent']
      })
      this.router.navigate(['/admin-dashboard'])
    }
    else {
      this._snackBar.open('Admin-logged-In', 'Failed', {
        duration: 3000,
        panelClass: ['mat-toolbar', 'mat-warn']
      })
    }


  }

  get email() { return this.adminLoginForm.get("email") }
  get password() { return this.adminLoginForm.get("password") }

}
