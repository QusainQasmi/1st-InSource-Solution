import { Injectable, Injector } from '@angular/core';
import { BaseService } from 'src/app/service/base.service';

@Injectable({
  providedIn: 'root'
})
export class NotificationSettingService extends BaseService<any>{

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
    return await this.Get("getNotification" , params);
  }

  async save(body: any){
    return await this.Post("addNotification" , body);
  }

  async edit(body: any){
    return await this.Post("editNotification" , body);
  }

  async delete(id: number){
    const params = [
      {
        name: 'id',
        value: id
      }
    ]
    return await this.Get("deleteNotification" , params);
  }

}
