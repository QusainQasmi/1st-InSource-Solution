import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { AppComponent } from './app.component';
import { NavberComponent } from './basicComponents/navber/navber.component';
import { AdminLoginComponent } from './main-layout/admin-login/admin-login.component';
import { ForgetPasswordComponent } from './main-layout/forget-password/forget-password.component';
import { LoginComponent } from './main-layout/login/login.component';
import { MainlayoutComponent } from './main-layout/mainlayout/mainlayout.component';
import { SignUpComponent } from './main-layout/sign-up/sign-up.component';

const routes: Routes = [
  { 
    path: '',
    component: MainlayoutComponent,
    children: [
      { path: '', redirectTo: 'user', pathMatch: 'full' },
      { path: 'user', loadChildren: () => import('./pages/user/user.module').then(m => m.UserModule) },
    ]
  },
  { 
    path: '',
    component: AdminLayoutComponent,
    children: [
      { path: '', redirectTo: 'admin', pathMatch: 'full' },
      { path: 'admin', loadChildren: () => import('./pages/admin/admin.module').then(m => m.AdminModule) },
    ]
  },
  { path: 'login', component: LoginComponent},
  { path: 'signUp', component: SignUpComponent},
  { path: 'adminLogin', component: AdminLoginComponent},
  { path: 'forgetPassword', component: ForgetPasswordComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
