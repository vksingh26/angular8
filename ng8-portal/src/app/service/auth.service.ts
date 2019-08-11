import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ILoginCredentials } from '../interfaces/login';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public http: HttpClient, private router: Router) { }

  login(credentials: ILoginCredentials) {
    console.log('get data' + credentials);
    this.http.post(environment.baseUrl + '/login', credentials)
      .subscribe(
        (res) => { console.log('HTTP response', res); this.router.navigate(['/product-list']); },
        (err) => { console.log('HTTP Error', err); }
      );
  }
}
