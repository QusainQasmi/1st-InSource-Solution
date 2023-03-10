import { Injectable, Injector } from '@angular/core';
import { inject } from '@angular/core/testing';
import { BaseService } from 'src/app/service/base.service';

@Injectable({
  providedIn: 'root'
})
export class AdminLoginService extends BaseService<any>  {

  constructor(inject : Injector) {
    super("auth" , inject);
  }
  
  async admin(body : object){
    return await this.Post("adminLogin" , body)
  }
}
