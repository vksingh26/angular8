import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/service/auth.service';
import { MustMatch } from 'src/app/custom/custom-validator';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css', '../login/login.component.css']
})
export class RegistrationComponent implements OnInit {
  registrationForm: FormGroup;
  submitted = false;
  passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[~^$;.@$!%*?#_&])[A-Za-z\d~^$;.@$!%*?#_&]{8,}$/;
  constructor(private router: Router, private authservice: AuthService, private form: FormBuilder) { }

  public buildForm() {
    this.registrationForm = this.form.group({
      username: ['', [Validators.required, Validators.minLength(6)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.pattern(this.passwordRegex)]],
      confirmPassword: ['', Validators.required],
    },
      {
        validator: MustMatch('password', 'confirmPassword')
      }
    );
  }

  get f() {
    return this.registrationForm.controls;
  }

  registration(registrationForm: FormGroup) {
    this.submitted = true;
    if (this.registrationForm.valid) {
      this.authservice.registeration(registrationForm.value).subscribe(
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

  loginMe() {
    console.log('Login me clicked!');
    this.router.navigate(['/login']);
  }
  ngOnInit() {
    this.buildForm();
  }

}
