import { Component, OnInit } from '@angular/core';
import { FaqSettingService } from '../../admin/faqsetting/faq-setting.service';

@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.component.html',
  styleUrls: ['./faqs.component.scss']
})
export class FaqsComponent implements OnInit {

  expansionData: any = [{}]

  constructor(public service: FaqSettingService) {}

  async getTableData() {
    const res = await (await this.service.getConfig()).toPromise();
    if (res.isSuccessFul) {
      this.expansionData = res.Data && res.Data.length > 0 ? [...res.Data] : [{}]
    }
    else{
      console.log(res.Data.message);
    }
  }
  
  ngOnInit(): void {
    this.getTableData();
  }

cardArry: any =[
  {src: 'chat.png' , name : 'Popular Comment'},
  {src: 'fast-delivery.png' , name : 'Deliery'},
  {src: 'return-box.png' , name : 'Return'}
]


}
