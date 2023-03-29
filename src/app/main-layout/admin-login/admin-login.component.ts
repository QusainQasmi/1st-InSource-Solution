import { Component } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatSnackBar } from '@angular/material/snack-bar';
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
  adminLoader: boolean = false;

  constructor(private router: Router, public service: AdminLoginService , public snackbar: MatSnackBar) { }

  showPass() {
    this.isShow = true;
  }

  hidePass() {
    this.isShow = false;
  }

  ngOnInit(): void { }

  async adminlogin() {
    this.adminLoader = true;
    const model = {
      name: this.model.adminNameVal,
      password: this.model.passVal
    }
    let res = await (await this.service.admin(model)).toPromise();
    if (res.isSuccessFul) {
      this.router.navigate(['/admin/home']);
      localStorage.setItem("admin", JSON.stringify(res))
      localStorage.setItem("adminName", res.Data && res.Data.data && res.Data.data.username);
      this.snackbar.open(res.Data.message , 'OK' , {
        duration: 3000
      });
      this.adminLoader = false;
    }
    else {
      this.adminLoader = false;
      this.snackbar.open(res.Error , 'OK' , {
        duration: 3000
       });
    }

  }

}

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}