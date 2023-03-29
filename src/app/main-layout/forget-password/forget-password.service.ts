import { Injectable, Injector } from '@angular/core';
import { BaseService } from 'src/app/service/base.service';

@Injectable({
  providedIn: 'root'
})
export class ForgetPasswordService extends BaseService<any>{

  constructor(inject: Injector) {
    super("auth" , inject);
   }

} 