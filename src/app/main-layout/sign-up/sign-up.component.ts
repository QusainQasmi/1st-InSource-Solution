import { Component } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { SignUpService } from './sign-up.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {

  emailValidator = new FormControl('', [Validators.required, Validators.email]);
  passwordValidator = new FormControl('', [Validators.required]);
  userValidator = new FormControl('', [Validators.required]);
  matcher = new MyErrorStateMatcher();

  constructor(public service: SignUpService) {}

  async signUp(){
    const model = {
      name: "bilalraza097",
      email: "bilalraza@gmail.com",
      password: 123
    }
    let res = await (await this.service.signUpAdmin(model)).toPromise();
    if(res.isSuccessFul){
       console.log(res.Data);
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
