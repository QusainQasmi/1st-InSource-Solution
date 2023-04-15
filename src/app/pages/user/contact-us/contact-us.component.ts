import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MyErrorStateMatcher } from 'src/app/main-layout/admin-login/admin-login.component';
import { ContactAdminService } from '../../admin/contact-admin/contact-admin.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent {

  model: any = {};
  sendLoader: boolean = false;
  matcher = new MyErrorStateMatcher();
  userValid = new FormControl('', [Validators.required]);
  emailValidator = new FormControl('', [Validators.required, Validators.email]);

  constructor(public service: ContactAdminService, public snackbar: MatSnackBar){

  }

  async sendMessage(){
    this.sendLoader = true;
    const obj = {
      name: this.model.userNameVal,
      email: this.model.emailVal,
      phoneNo: this.model.number,
      message: this.model.message
    }
    const res = await (await this.service.save(obj)).toPromise();
    if(res.isSuccessFul){
      this.sendLoader = false;
      this.snackbar.open('Send Successfully...!', 'Ok' , {
        duration: 3500,
      });
    }
    else{
      this.sendLoader = false;
      this.snackbar.open(res.Error, 'Ok' , {
        duration: 3500,
      })
    }
  }
}
