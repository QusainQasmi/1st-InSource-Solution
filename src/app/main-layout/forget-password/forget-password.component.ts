import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})

export class ForgetPasswordComponent implements OnInit {
  model: any = {};
  isShow: boolean = false;
  emailValid = new FormControl('', [Validators.required]);
  passValid = new FormControl('', [Validators.required]);
  rePassValid = new FormControl('', [Validators.required]);
  matcher = new MyErrorStateMatcher();
  service: any;

  constructor(private router: Router){

  }

  showPass(){
    this.isShow = true;
  }

  hidePass(){
    this.isShow = false;
  }

  ngOnInit(): void{

  }
  async Forget(){
    console.log(this.model);
    
  }
}

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
} 