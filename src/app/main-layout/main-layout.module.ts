import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { MainLayoutRoutingModule } from './main-layout-routing.module';
import { MatModule } from '../material/mat.module';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    SignUpComponent,
    LoginComponent,
    ForgetPasswordComponent
  ],
  imports: [
    MainLayoutRoutingModule,
    CommonModule,
    HttpClientModule,
    MatModule
  ],
  providers: [],
  bootstrap: []
})
export class MainLayoutModule { }
