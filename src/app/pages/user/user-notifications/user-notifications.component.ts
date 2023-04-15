import { Component } from '@angular/core';
import { NotificationSettingService } from '../../admin/notification-setting/notification-setting.service';

@Component({
  selector: 'app-user-notifications',
  templateUrl: './user-notifications.component.html',
  styleUrls: ['./user-notifications.component.scss']
})
export class UserNotificationsComponent {
  
  listData: any = [{}];
  loader: boolean = false;

  constructor(public service: NotificationSettingService){}

  async getData(serachVal?: any){
    this.loader = true;
    const res = await (await this.service.getConfig(serachVal)).toPromise();
    if(res.isSuccessFul){
      this.listData = res.Data && res.Data.length > 0 ? [...res.Data] : [{}];
      this.loader = false;
    }
    else{
      this.loader = false;
    }
  }

  ngOnInit(){
    this.getData();
  }
}
