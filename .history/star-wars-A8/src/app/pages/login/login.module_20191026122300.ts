import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRoutingModule } from './login.routing';
import { LoginComponent } from './login.component';



@NgModule({
  declarations: [LoginComponent],
  exports: [LoginModule],
  imports: [
    CommonModule,
    LoginRoutingModule
  ]
})
export class LoginModule { }
