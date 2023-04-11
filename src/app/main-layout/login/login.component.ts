import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  model: any = {};
  isShow: boolean = false;
  loginLoader: boolean = false;
  emailValid = new FormControl('', [Validators.required , Validators.email]);
  passValid = new FormControl('', [Validators.required]);
  matcher = new MyErrorStateMatcher();

  constructor(private router: Router , private service: LoginService , public snackbar: MatSnackBar , public activatedRouter: ActivatedRoute){

  }

  showPass(){
    this.isShow = true;
  }

  hidePass(){
    this.isShow = false;
  }

  async login(){
    this.loginLoader = true;
    const model = {
      email: this.model.emailVal,
      password: this.model.passVal
    }
    let res = await (await this.service.loginUser(model)).toPromise();
    if(res.isSuccessFul){
      this.router.navigate(['/user/main']);
      localStorage.setItem("user", JSON.stringify(res))
      localStorage.setItem("username", res.Data && res.Data.data && res.Data.data.username);
      this.snackbar.open('Login SuccessFully...!' , 'OK' , {
        duration: 3000
      });
      this.loginLoader = false;
    }
    else{
      this.loginLoader = false;
      this.snackbar.open(res.Data.message , 'OK' , {
        duration: 3000
       });
    }
  }

  async verifyUser(key: any){
   let res = await (await this.service.verifyUser(key)).toPromise();
   if(res.isSuccessFul){
    this.snackbar.open(res.Data.message , 'OK' , {
      duration: 5000
    });
   }
   else{
    this.snackbar.open(res.Data.message , 'OK' , {
      duration: 5000
    });
   }
  }

  ngOnInit(): void{
    this.activatedRouter.queryParams.subscribe((data: any) => {
      if(data && data.key){
        this.verifyUser(data.key);
      }
    })
  }

}


export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
