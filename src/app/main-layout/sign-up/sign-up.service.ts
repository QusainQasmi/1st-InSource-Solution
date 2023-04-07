import { Injectable , Injector } from '@angular/core';
import { BaseService } from 'src/app/service/base.service';

@Injectable({
  providedIn: 'root'
})
export class SignUpService extends BaseService<any> {

  constructor(inject: Injector) {
    super("auth" , inject);
  }

  async signUpUser(body: object) {
    return await this.Post("register" , body);
  }

  async resendMail(body: object) {
    return await this.Post("resendMail" , body);
  }
}
