import { AuthService } from './../../service/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css', '../login/login.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  fPassForm: FormGroup;
  submitted = false;
  constructor(private router: Router, private authservice: AuthService, private form: FormBuilder) { }

  public buildForm() {
    this.fPassForm = this.form.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  get f() {
    return this.fPassForm.controls;
  }

  forgotPassword() {
    this.submitted = true;
    if (this.fPassForm.valid) {
      this.authservice.forgotPassword(this.fPassForm.value).subscribe(
        (res) => {
          console.log('HTTP response', res);
          if (res) {
            this.router.navigate(['/login']);
          }
        },
        (err) => {
          console.log('HTTP Error', err);
        }
      );
    }
  }
  goToLogin() {
    this.router.navigate(['login']);
  }
  ngOnInit() {
    this.buildForm();
  }
}
