import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css', '../login/login.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private router: Router) { }
  loginMe() {
    console.log('Login me clicked!');
    this.router.navigate(['/login']);
  }
  register() {
    console.log('Register button is clicked!');
    this.router.navigate(['/login']);
  }
  ngOnInit() {
  }

}
