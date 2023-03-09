import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { SignUpService } from './sign-up.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  model: any = {};
  isShow : boolean = false;
  emailValidator = new FormControl('', [Validators.required, Validators.email]);
  passwordValidator = new FormControl('', [Validators.required]);
  userValidator = new FormControl('', [Validators.required]);
  matcher = new MyErrorStateMatcher();

  constructor(public service: SignUpService) {}

  showPass(){
    this.isShow = true;
  }

  hidePass(){
    this.isShow = false;
  }

  ngOnInit(): void {
    
  }

  async signUp(){
    const model = {
      name: this.model.userNameVal,
      email: this.model.emailVal,
      password: this.model.passVal
    }
    let res = await (await this.service.signUpUser(model)).toPromise();
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