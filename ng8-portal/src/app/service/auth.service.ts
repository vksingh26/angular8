import { RestService } from './rest/rest.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ILoginCredentials, IRegisterCredentials, IForgotPassword } from '../interfaces/auth';
import { Router } from '@angular/router';
import { Observable, BehaviorSubject, throwError } from 'rxjs';
import { UrlConstants } from '../constants/url-constant';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn = new BehaviorSubject<boolean>(false);
  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }

  constructor(public http: HttpClient, private router: Router, private restService: RestService) { }

  login(credentials: ILoginCredentials) {
    this.loggedIn.next(true);
    return this.restService.post(UrlConstants.LOGIN_URL, credentials);
  }

  registeration(credentials: IRegisterCredentials): Observable<any> {
    return this.http.post<any>(UrlConstants.REGISTERATION_URL, credentials);
  }

  forgotPassword(credentials: IForgotPassword): Observable<any> {
    return this.http.post<any>(UrlConstants.FORGOTPASSWORD_URL, credentials);
  }

  logout() {
    this.loggedIn.next(false);
    this.router.navigate(['login']);
  }
}
