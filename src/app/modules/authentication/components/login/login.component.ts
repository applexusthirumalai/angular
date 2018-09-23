import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../../shared/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userName: string;
  password: string;
  
  constructor(private authService: AuthService,
              private router: Router) { }

  ngOnInit() {
  }

  loginUser(event) {
    event.preventDefault();
    this.authService.loginUser(this.userName, this.password).subscribe(data => {
        if(data.status) { 
          this.authService.loginStatus = true;
          this.router.navigate(['/admin']);
        } else {
          this.authService.loginStatus = false;
          alert (data.message);
        }},
      error => {
        console.log(error);
        alert("API access error");
    });
  }


}
