import { Injectable , Injector } from '@angular/core';
import { BaseService } from 'src/app/service/base.service';

@Injectable({
  providedIn: 'root'
})
export class SignUpService extends BaseService<any> {

  constructor(Inject: Injector) {
    super("auth",Inject);
  }

  async signUpAdmin(obj: Object){
    return await this.Post('adminRegister' , obj);
  }
}
