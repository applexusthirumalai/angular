import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService,
              private router: Router) {
                
              }
  
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    //check whether localstorage contains loginstatus true, if so client session is active
    if(this.authService.loginStatus) {
      return this.authService.loginStatus;
    } else {
        //if client session is false check whether server session is active
      return this.authService.getLoginStatusFromServer().pipe(map (data => {
          
          this.authService.loginStatus = data;
          if(!data){
            this.router.navigate(['']);
          }
          return data;
        },error => {
          this.authService.loginStatus = false;
          console.log(error);
          return false;         
        })
      );
    }
  }
}
