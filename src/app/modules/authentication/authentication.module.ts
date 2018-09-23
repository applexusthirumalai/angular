import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { authenticationRouting } from './authentication.routing';
import { FormsModule } from '@angular/forms'
@NgModule({
  imports: [
    CommonModule,
    authenticationRouting,
    FormsModule
  ],
  declarations: [LoginComponent]
})
export class AuthenticationModule { }
