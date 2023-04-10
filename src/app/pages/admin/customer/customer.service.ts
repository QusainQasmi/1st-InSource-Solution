import { Injectable, Injector } from '@angular/core';
import { BaseService } from 'src/app/service/base.service';

@Injectable({
  providedIn: 'root'
})
export class CustomerService extends BaseService<any> {

  constructor(inject: Injector) { 
    super("general", inject)
  }

  async getConfig(searchValue?: any){
    const params = [
      {
        name: "searchValue",
        value: searchValue
      },
    ]
    return await this.Get("getCustomer" , params);
  }
}
