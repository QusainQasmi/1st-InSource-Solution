import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';

import { MatModule } from '../material/mat.module';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { BasicModule } from '../basicComponents/basic.module';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    SignUpComponent,
    LoginComponent,
    ForgetPasswordComponent,
    AdminLoginComponent
  ],
  imports: [
    BasicModule,
    CommonModule,
    MatModule,
    FormsModule,
    RouterModule
  ],
  exports: [
    RouterModule
  ],
  providers: [],
  bootstrap: []
})
export class MainLayoutModule { }
