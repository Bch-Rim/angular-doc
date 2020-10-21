import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }
  uri = environment.urlLogin;

  post(user) {
    return this.http.post<any>(this.uri, user);
  }
}