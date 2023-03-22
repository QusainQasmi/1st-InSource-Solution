import { Component } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Router } from '@angular/router';
import { AdminLoginService } from './admin-login.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent {

  model: any = {};
  isShow: boolean = false;
  adminValid = new FormControl('', [Validators.required]);
  passValid = new FormControl('', [Validators.required]);
  matcher = new MyErrorStateMatcher();

  constructor(private router: Router , public service: AdminLoginService){

  }

  showPass(){
    this.isShow = true;
  }

  hidePass(){
    this.isShow = false;
  }

  ngOnInit(): void{

  }

  async adminlogin (){
    const  model = {
   name : this.model.adminNameVal,
   password : this.model.passVal
    }   
    let res = await(await this.service.admin(model)).toPromise();
  if(res.isSuccessFul){

  }
  else{
    console.log(res.Error);
  }

  }
  
}

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}