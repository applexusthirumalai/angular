import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { adminRouting } from './admin.routing';

@NgModule({
  imports: [
    CommonModule,
    adminRouting
  ],
  declarations: [HomeComponent]
})
export class AdminModule { }
