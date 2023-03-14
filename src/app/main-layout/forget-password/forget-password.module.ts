import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatModule } from 'src/app/material/mat.module';
import { RouterModule, Routes } from '@angular/router';
import { ForgetPasswordComponent } from './forget-password.component';

const routes: Routes = [
    // { path: '' , component : ForgetPasswordComponent },
  ];

@NgModule({
  declarations: [
    ForgetPasswordComponent,
  ],
  imports: [
    CommonModule,
    MatModule
  ],
  exports: [
    RouterModule
  ],
  providers: [],
  bootstrap: []
})
export class ForgetPasswordModule { }
