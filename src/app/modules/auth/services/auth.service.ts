import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}
  login(data: any) {
    return this.http.post(environment.API_LOGIN, data);
  }
  signUpSponsor(data: any) {
    return this.http.post(environment.API_SIGN_SPONSOR, {
      username: data.username,
      password: data.password,
    });
  }
  signUpBtv(data: any) {
    return this.http.post(environment.API_SIGN_BTV, {
      username: data.username,
      password: data.password,
    });
  }
}
