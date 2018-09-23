import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { loginData } from '../interceptors/interface.type';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  

  constructor(private http: HttpClient) {
    
   }
 
  private _loginStatus: boolean = JSON.parse(localStorage.getItem('loginStatus') || 'false');
  //loginStatus setter
  set loginStatus(value) {
    this._loginStatus = value;
    localStorage.setItem ('loginStatus',value.toString());
  }
  //loginStatus getter
  get loginStatus(){
    return this._loginStatus;
  }
  
  //authenticate the user by sending their details to server
  loginUser(username: string, password: string):Observable<loginData> {
    return this.http.post<loginData>('/api/login',{username, password});
  }
  //check whether server has session details
  getLoginStatusFromServer(): Observable<boolean> {
    return this.http.get<boolean>('/api/isLoggedIn');
  }
  //send the logout request to the server
  logout():Observable<boolean> {
    return this.http.get<boolean>('/api/logout');
  }

}
