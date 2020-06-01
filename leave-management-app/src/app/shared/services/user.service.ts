import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { UserDTO } from '../types/custom-types';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public loggedInUser: UserDTO;
  public signupUser: UserDTO;
  url = environment.apiUrl;
  headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  options = ({ headers: this.headers });

  constructor(private httpClient: HttpClient) { }

  signup(user: UserDTO): Observable<any> {
    return this.httpClient.post(this.url + 'user/signup', user, this.options);
  }

  login(user: UserDTO): Observable<any> {
    return this.httpClient.post(this.url + 'user/login', user, this.options);
  }

  allUsers(): Observable<any> {
    return this.httpClient.get(this.url + 'user/allUsers', this.options);
  }
}
