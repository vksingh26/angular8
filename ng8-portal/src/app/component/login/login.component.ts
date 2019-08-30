import { map, take } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { FormGroup, Validators, FormBuilder, FormControl } from '@angular/forms';
import { ILoginCredentials } from 'src/app/interfaces/auth';
import { Observable, BehaviorSubject } from 'rxjs';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;
  isLoggedIn$: Observable<boolean>;
  private loggedIn = new BehaviorSubject<boolean>(false);
  constructor(private router: Router, private authService: AuthService, private form: FormBuilder) { }

  public buildForm() {
    this.loginForm = this.form.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  get f() {
    return this.loginForm.controls;
  }

  login(loginForm: FormGroup) {
    this.submitted = true;

    if (this.loginForm.valid) {
      this.authService.login(loginForm.value).subscribe(
        (res) => {
          if (res) {
            this.router.navigate(['product-list']);
            sessionStorage.setItem('username', res.data.username);
            sessionStorage.setItem('email', res.data.email);
            setTimeout(() => {
              this.loggedIn.next(true);
            }, 100);

          }
        },
        (err) => {
          throw err;
        }
      );
    }
  }
  registerMe() {
    console.log('Register Me clicked!');
    this.router.navigate(['register']);
  }

  forgotPassword() {
    console.log('Forgot Password clicked!');
    this.router.navigate(['register']);
  }
  ngOnInit() {
    this.buildForm();
  }
}
