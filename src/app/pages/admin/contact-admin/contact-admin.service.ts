import { Injectable, Injector } from '@angular/core';
import { BaseService } from 'src/app/service/base.service';

@Injectable({
  providedIn: 'root'
})
export class ContactAdminService extends BaseService<any> {

  constructor(inject: Injector) {
    super("general", inject)
  }

  async getConfig(searchValue?: any) {
    const params = [
      {
        name: "searchValue",
        value: searchValue
      },
    ]
    return await this.Get("getContact", params);
  }

  async save(obj: any) {
    return await this.Post("addOrEditContact", obj);
  }

  async delete(id: any) {
    const params = [
      {
        name: 'id',
        value: id
      }
    ]
    return await this.Get("deleteContact", params);
  }
}
