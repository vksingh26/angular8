import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }
  login() {
    console.log('Login Clicked !');
    this.router.navigate(['/product']);
  }
  registerMe() {
    console.log('Register Me clicked!');
    this.router.navigate(['/register']);
  }

  ngOnInit() {
  }

}
