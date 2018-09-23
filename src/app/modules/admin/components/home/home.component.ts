import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../../shared/services/auth.service';
import { Router } from '@angular/router';
import { UserService } from '../../../../shared/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user: string;
  constructor(private authService: AuthService,
              private router: Router,
              private userService: UserService) { }

  ngOnInit() {
    this.userService.getAdminData().subscribe(data => {
      if(!data.status) {
        this.router.navigate(['']);
      }
      else {
        this.user = data.user
      }      
    })
  }
  
  //send the logout request to server 
  logout() {
    this.authService.logout().subscribe(data => {
      if(data) {
        this.authService.loginStatus = !data;
        this.router.navigate(['']);
      } else {
        alert('Error in logout');
      }
    },error => {
        alert("Api access error");
    });
  }

}
