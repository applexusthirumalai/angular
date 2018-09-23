import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { adminData } from '../interceptors/interface.type';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user: string;
  constructor(private http: HttpClient, 
              private router: Router) { 
                
              }
  
  getAdminData():Observable<adminData>{
   return this.http.get<adminData>('/api/getAdmin');
  }
  
  
}
