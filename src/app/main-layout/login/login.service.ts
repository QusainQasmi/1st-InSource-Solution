import { Injectable , Injector } from '@angular/core';
import { BaseService } from 'src/app/service/base.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService extends BaseService<any> {

  constructor(inject: Injector) {
    super("auth" , inject);
  }

  async loginUser(body: object) {
    return await this.Post("login" , body);
  }
}
