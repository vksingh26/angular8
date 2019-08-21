import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ILoginCredentials, IRegisterCredentials } from '../interfaces/login';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UrlConstants } from '../constants/url-constant';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public http: HttpClient, private router: Router) { }

  login(credentials: ILoginCredentials): Observable<any> {
    return this.http.post<any>(UrlConstants.LOGIN_URL, credentials);
  }

  registeration(credentials: IRegisterCredentials): Observable<any> {
    return this.http.post<any>(UrlConstants.REGISTERATION_URL, credentials);
  }
}
