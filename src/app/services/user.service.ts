import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url = 'http://localhost:1488/api/user';

  constructor(
    private http: HttpClient
  ) { }


  getUserById(id: string): Observable<any> {
    return this.http.get(this.url + `/${id}`) as Observable<any>;
  }

  register(login: string, password: string, address: string, firstName: string, phoneNumber: string, email: string): Observable<any> {
    let body = {
      login: login,
      password: password,
      address: address,
      firstName: firstName,
      phoneNumber: phoneNumber,
      email: email
    };
    return this.http.post(this.url + `/register`, body) as Observable<any>;
  }

}
